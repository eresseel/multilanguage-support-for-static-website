function cookieAccept() {
    setCookie("cookieAccept", 1, 2);
    hideCookie();
}

function hideCookie() {
    $("#cookieAccept").hide("slow", function () {
        $("#cookieAccept").css("display", "none");
    });
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 3600 * 1000)); //hour
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname, search = false) {
    let ca = document.cookie.split(";");
    let getCookie = "";

    for (let i = 0; i < ca.length; i++) {
        if (search == false && ca[i].trim() == cname) {
            getCookie = ca[i];
            return getCookie;
        } else if (search == true && ca[i].search(cname) != -1) {
            getCookie = ca[i];
            return getCookie;
        }
    }

    return false;
}

if (getCookie("cookieAccept=1")) {
    $("#cookieAccept").css("display", "none");
}