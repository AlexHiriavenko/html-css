document.addEventListener("DOMContentLoaded", checkTheme);
function checkTheme() {
    if (localStorage.link === "some text") {
        newTheme();
    }
}

function newTheme() {
    const head = document.querySelector("head");
    let secondTheme = document.querySelector("link[data-secondtheme]");
    if (secondTheme !== null) {
        secondTheme.remove();
        localStorage.removeItem('link')
        console.log(localStorage)
    } else if (!secondTheme) {
        let link = document.createElement("link");
        link.setAttribute("rel", ("stylesheet"));
        link.setAttribute("href", ("./styles/test.css"));
        link.setAttribute("data-secondtheme", ("any text"));
        head.append(link);
        localStorage.setItem('link', "some text");
        console.log(localStorage)
    }
}


