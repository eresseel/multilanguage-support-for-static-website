let languages = [
    en = {
        head: "Cookies",
        content: "By using our website, you approve the use of cookies.",
        title: "Acceptance of cookies",
        accept: "Accept"
    },
    de = {
        head: "Cookies",
        content: "Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.",
        title: "Annahme von Cookies",
        accept: "Akzeptieren"
    },
    fr = {
        head: "Cookies",
        content: "En utilisant notre site Web, vous acceptez l'utilisation de cookies.",
        title: "Acceptation des cookies",
        accept: "Accepter"
    },
    hu = {
        head: "Sütik",
        content: "Weboldalunk használatával jóváhagyod a sütik használatát.",
        title: "Süti elfogadása",
        accept: "Elfogadom"
    },
    it = {
        head: "Cookies",
        content: "Utilizzando il nostro sito Web, accetti l'uso dei cookie.",
        title: "Accettazione dei cookie",
        accept: "Accettare"
    }
];

function hideCookie() {
    $("#cookieAccept").hide("slow", function () {
        $("#cookieAccept").css('display', 'none');
    });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 3600 * 1000)); //hour
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function cookieAccept() {
    setCookie("cookieAccept", 1, 2);
    hideCookie();
}

function getCookie(cname) {
    let ca = document.cookie.split(';');
    let getCookie = "";

    for (let i = 0; i < ca.length; i++) {
        if (ca[i].trim() == cname) {
            getCookie = ca[i];
            return getCookie;
        }
    }

    return false;
}

if (getCookie("cookieAccept=1")) {
    $("#cookieAccept").css('display', 'none');
}