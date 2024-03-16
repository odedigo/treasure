$(document).ready(function() {
    let riddles = {}

    let team = getParameterValues('team')
    let index = getParameterValues('index')
    if (!isValidParams(team,index)) {
        $("#error_msg").html("קוד ה QR לא חוקי")
        return;
    }

    function getParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }

    function isValidParams(team,index) {
        if (team != "blue" && team != "green" && team != "red")
            return false;
        if (index <= 0 || index > 5)
            return false;
        return true
    }
});