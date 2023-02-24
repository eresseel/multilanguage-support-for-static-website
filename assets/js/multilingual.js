let languages = {
    en: {
        head: "Cookies",
        content: "By using our website, you approve the use of cookies.",
        title: "Acceptance of cookies",
        accept: "Accept"
    },
    de: {
        head: "Cookies",
        content: "Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.",
        title: "Annahme von Cookies",
        accept: "Akzeptieren"
    },
    fr: {
        head: "Cookies",
        content: "En utilisant notre site Web, vous acceptez l'utilisation de cookies.",
        title: "Acceptation des cookies",
        accept: "Accepter"
    },
    hu: {
        head: "Sütik",
        content: "Weboldalunk használatával jóváhagyod a sütik használatát.",
        title: "Süti elfogadása",
        accept: "Elfogadom"
    },
    it: {
        head: "Cookies",
        content: "Utilizzando il nostro sito Web, accetti l'uso dei cookie.",
        title: "Accettazione dei cookie",
        accept: "Accettare"
    }
};

let defaultLanguage = "hu";
let languageByBrowser = navigator.language || navigator.userLanguage;
languageByBrowser = languageByBrowser.substring(0, 2);

if (getCookie("isSetLanguageByBrowser=true") == false && languages[languageByBrowser] != undefined) {
    setCookie("language", languageByBrowser, 2);
    setCookie("isSetLanguageByBrowser", "true", 2);
} else if (getCookie("isSetLanguageByBrowser=true") == false && languages[languageByBrowser] == undefined) {
    languageByBrowser = defaultLanguage;
    setCookie("language", defaultLanguage, 2);
    setCookie("isSetLanguageByBrowser", "true", 2);
}

let cookieHtml = "";

Object.entries(languages).forEach(([key]) => {
    if (key == getCookie("language=", true).split('=')[1]) {
        cookieHtml += `
        <div>
            <blockquote class="blockquote">
                <a>`+ languages[key]["head"] + `</a>
            </blockquote>
        </div>
        <div>
            <p>`+ languages[key]["content"] + `</p>
        </div>
        <div class="btn btn-primary">
            <a onclick="cookieAccept();" title="`+ languages[key]["title"] + `">` + languages[key]["accept"] + `</a>
        </div>
    `
    }
});

$('#cookieAccept').html(cookieHtml);

function setLanguage(language) {
    setCookie("language", language, 2);
}