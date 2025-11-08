import {renderHome} from "./renderHome.js";
import {renderAbout} from "./renderAbout.js";
import {renderContact} from "./renderContact.js";

document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll<HTMLAnchorElement>(".navLinks");
    links.forEach(link => link.addEventListener("click", clickLink));
});


function clickLink(e: MouseEvent){
   
    const links = document.querySelectorAll<HTMLAnchorElement>(".navLinks");
    links.forEach(link => link.classList.remove("selected"));

    const currentLink = e.currentTarget as HTMLAnchorElement;
    currentLink.classList.add("selected");

    generateContent(currentLink.id);
}
 
function generateContent(id : String){
    
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

