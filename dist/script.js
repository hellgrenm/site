import { renderHome } from "./generateHome.js";
import { renderAbout } from "./generateAbout.js";
import { renderContact } from "./generateContact.js";
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navLinks");
    links.forEach(link => link.addEventListener("click", clickLink));
});
function clickLink(e) {
    const links = document.querySelectorAll(".navLinks");
    links.forEach(link => link.classList.remove("selected"));
    const currentLink = e.currentTarget;
    currentLink.classList.add("selected");
    generateContent(currentLink.id);
}
function generateContent(id) {
    switch (id) {
        case "home":
            renderHome();
            break;
        case "about":
            renderAbout();
            break;
        case "contact":
            renderContact();
            break;
        default:
            break;
    }
}
