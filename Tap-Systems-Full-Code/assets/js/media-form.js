document.addEventListener("DOMContentLoaded", function(event) { 
  const imgs = document.querySelectorAll(".image img");
  const hiddenBtns = document.getElementById("hide-btn-form");
  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const endBtns = document.querySelectorAll(".btn-end");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  let formStepNum = 0;


  imgs.forEach((option) => {
      option.addEventListener("click", () => {
        hiddenBtns.classList.remove("hide-btn");
        clearClass("option-selection");
        option.classList.add("option-selection");
      });
  });

  function clearClass(className)
  {
    Array.from(imgs).forEach((el) => el.classList.remove(className));
  }

  function getOption()
  {
    option = document.querySelectorAll(".option-selection")[0].alt;
    return option;
  }

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (getOption() == "image") formStepNum = 1
      else if(getOption() == "video") formStepNum = 2
      else if(getOption() == "audio") formStepNum = 3

      updateFormSteps();
      updateProgressbar();
    });
  });

  endBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepNum = 4;

      updateFormSteps();
      updateProgressbar();
    });
  });
    
    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        clearClass("option-selection");
        hiddenBtns.classList.add("hide-btn");
        formStepNum = 0;
        updateFormSteps();
        updateProgressbar();
      });
    });
    
    function updateFormSteps() 
    {
      formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
          formStep.classList.remove("form-step-active");
      });
    
      formSteps[formStepNum].classList.add("form-step-active");
    }
    
    function updateProgressbar() 
    {
      progressSteps.forEach((progressStep, idx) => {
        temp = formStepNum;
        if (temp > 0 && temp < 4) temp = 1

        if (idx < temp + 1) {
          progressStep.classList.add("progress-step-active");
        } else {
          progressStep.classList.remove("progress-step-active");
        }
      });
    
      const progressActive = document.querySelectorAll(".progress-step-active");
    
      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }
});
