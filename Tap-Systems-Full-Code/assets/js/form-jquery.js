$(document).ready(function() {
    /* Accept buttons */
    $('#accept-button-photo').click(function() {
        $('#part-1-add').hide();
        $('#part-1-upload').show();
    });

    $('#accept-button-video').click(function() {
        $('#part-2-add').hide();
        $('#part-2-upload').show();
    });

    $('#accept-button-audio').click(function() {
        $('#part-3-add').hide();
        $('#part-3-upload').show();
    });

    /* Skip buttons */
    $('#decline-button-photo').click(function() {
            $('#part-1-add').hide();
            $('#part-2-add').show();
    });

    $('#decline-button-video').click(function() {
            $('#part-2-add').hide();
            $('#part-3-add').show();
    });

    $('#decline-button-audio').click(function() {
            $('#part-3-add').hide();
    });
});
