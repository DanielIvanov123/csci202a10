$(document).ready(function() {
    var descriptions = [
        "Description for page 1",
        "Description for page 2",
        "Description for page 3",
        "Description for page 4",
        "Description for page 5"
    ];

    function updateIframe() {
        var value = $('#page-slider').val();
        $('.my-iframe').hide();
        $('#iframe' + value).show();
        $('#description').text(descriptions[value - 1]);
    }

    $('#page-slider').on('input', function() {
        updateIframe();
    });

    updateIframe();
});
