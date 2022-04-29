<!DOCTYPE html>
<html>
    <head>
        <title>Upload</title>
        <link rel=stylesheet href="assets/css/styles.css">
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="assets/js/functions.js"></script>
        <script type="text/javascript" src="assets/js/form-jquery.js"></script>
    </head>
    <body>
        <div id="form">
            <form action="upload.php" method="post" id="upload-form" enctype="multipart/form-data">
                <!-- PART 1 OF FORM --> 
                <div id="part-1">
                    <div id="part-1-add">
                        <label>Do you want to add a photo</label><br>
                        <input type="button" id="accept-button-photo" value="YES">
                        <input type="button" id="decline-button-photo" value="NO">
                    </div>

                    <div id="part-1-upload">
                        <input type="file" name="file">
                        <input type="button" name="submit-photo" value="UPLOAD">
                    </div>
                </div>
                
                <!-- PART 2 OF FORM -->
                <div id="part-2">
                    <div id="part-2-add">
                        <label>Do you want to add a video</label><br>
                        <input type="button" id="accept-button-video" value="YES">
                        <input type="button" id="decline-button-video" value="NO">
                    </div>

                    <div id="part-2-upload">
                        <input type="file" name="file">
                        <input type="button" name="submit-video" value="UPLOAD">
                    </div>
                </div>

                <!-- PART 3 OF FORM -->
                <div id="part-3">    
                    <div id="part-3-add">
                        <label>Do you want to add audio</label><br>
                        <input type="button" id="accept-button-audio" value="YES">
                        <input type="button" id="decline-button-audio" value="NO">
                    </div>

                    <div id="part-3-upload">
                        <input type="file" name="file">
                        <input type="button" name="submit-audio" value="UPLOAD">
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>