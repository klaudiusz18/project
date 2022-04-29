document.addEventListener("DOMContentLoaded", function(event) { 
    const modals = document.querySelectorAll(".modal");
    const btnShowModal = document.querySelectorAll(".btn-show-modal");
    const btnCloseModal = document.querySelectorAll(".close-button");
    const overlay = document.getElementById("overlay");
    const allTags = document.getElementsByTagName("*");


    btnShowModal.forEach((btn) => {
        btn.addEventListener("click", () => {
            showOverlay();
            showModal();
        });
    });

    btnCloseModal.forEach((btn) => {
        btn.addEventListener("click", () => {
            hideOverlay();
            hideModal();
        })
    })

    allTags.forEach((speak) => {
        speak.addEventListener("click", () => {
            
        });
    });

    function speek(words)
    {
        let speech = new SpeechSynthesisUtterance(words);
        speech.lang="en";
        
        window.speechSynthesis.speak(speech);
    }

    /* Submit form: pass form id as parameter to function */
    function submitForm(id)
    {
        document.getElementById(id).submit();
    }

    /* Stop scrolling: add css attributes to body element */
    function stopScrolling()
    {
        $('body').addClass('stop_scrolling');
    }

    function showModal()
    {
        modals.forEach((modal) => {
            modal.classList.contains("hide") &&
            modal.classList.remove("hide");
        });
    }

    function hideModal()
    {
        modals.forEach((modal) => {
            modal.classList.add("hide");
        });
    }

    function showOverlay()
    {
        overlay.classList.add("active");
    }

    function hideOverlay()
    {
        overlay.classList.remove("active");
    }
});
