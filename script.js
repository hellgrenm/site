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
function renderHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Lorem Ipsum";
    contentDiv.appendChild(h1);
    const pTag = document.createElement("p");
    pTag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tortor ut tincidunt ullamcorper. Donec vitae fringilla quam, quis ullamcorper nunc. Maecenas condimentum est interdum, molestie nunc nec, efficitur orci. In hac habitasse platea dictumst. Etiam fermentum odio interdum erat ultrices molestie.";
    contentDiv.appendChild(pTag);
    const pictureDiv = document.createElement("div");
    pictureDiv.classList.add("pictureDiv");
    for (let i = 0; i < 3; i++) {
        const imageBlock = document.createElement("div");
        imageBlock.classList.add("imageBlock");
        const image = document.createElement("img");
        image.src = "images/example.png";
        const pInfo = document.createElement("p");
        pInfo.textContent = "Info here";
        imageBlock.appendChild(image);
        imageBlock.appendChild(pInfo);
        pictureDiv.appendChild(imageBlock);
    }
    contentDiv.appendChild(pictureDiv);
}
function renderAbout() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Info bla bla bla";
    contentDiv.appendChild(h1);
    const pInfoText = document.createElement("p");
    pInfoText.textContent = "Praesent eu maximus est, pharetra euismod dui. Donec pretium, enim at volutpat mattis, orci metus vehicula mi, vitae ultrices purus velit ac sapien. Cras fermentum, tortor nec fermentum scelerisque, leo erat sollicitudin tortor, sit amet posuere elit est ac eros. Etiam pulvinar nulla ligula, at lobortis nisl consequat in.";
    contentDiv.appendChild(pInfoText);
    const secondInfoText = document.createElement("p");
    secondInfoText.textContent = "Aliquam vehicula, neque porta mattis mollis, nisi ipsum tristique ipsum, id ornare odio lacus sed nisi. Nulla eleifend vehicula consequat. Donec ac rutrum nisi. Cras malesuada, tellus vel eleifend maximus, risus lorem egestas neque, at rhoncus nulla dolor mollis augue. Integer lectus mi, porta a laoreet elementum, egestas sit amet mi. Curabitur sagittis diam at est fringilla, a interdum lacus luctus. Nullam accumsan tincidunt tortor, ut auctor augue venenatis sed.";
    contentDiv.appendChild(secondInfoText);
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("courses");
    const ulTag = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
        const liTag = document.createElement("li");
        const aTag = document.createElement("a");
        aTag.href = "";
        aTag.textContent = "Course " + i;
        liTag.appendChild(aTag);
        ulTag.appendChild(liTag);
    }
    courseDiv.appendChild(ulTag);
    contentDiv.appendChild(courseDiv);
}
function renderContact() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.textContent = "Contact me";
    contentDiv.appendChild(h1);
    const pInfoContact = document.createElement("p");
    pInfoContact.textContent = "Nam facilisis vestibulum ipsum non consequat. Suspendisse pulvinar, lacus ut consectetur posuere, nisl odio posuere nunc, dignissim tempor leo felis ut lorem.";
    contentDiv.appendChild(pInfoContact);
    const formDiv = document.createElement("div");
    formDiv.classList.add("formDiv");
    const formTag = document.createElement("form");
    const labelName = document.createElement("label");
    labelName.htmlFor = "name";
    labelName.textContent = "Name:";
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "name";
    textInput.required = true;
    formTag.appendChild(labelName);
    formTag.appendChild(textInput);
    const emailLabel = document.createElement("label");
    emailLabel.htmlFor = "email";
    emailLabel.textContent = "Your email adress:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.required = true;
    formTag.appendChild(emailLabel);
    formTag.appendChild(emailInput);
    const messageLabel = document.createElement("label");
    messageLabel.htmlFor = "message";
    messageLabel.textContent = "Your message";
    const messageTextArea = document.createElement("textarea");
    messageTextArea.setAttribute("rows", "4");
    messageTextArea.setAttribute("cols", "50");
    messageTextArea.required = true;
    const sendButton = document.createElement("button");
    sendButton.id = "btnSend";
    sendButton.type = "submit";
    sendButton.textContent = "Send";
    formTag.appendChild(messageLabel);
    formTag.appendChild(messageTextArea);
    formTag.appendChild(sendButton);
    formDiv.appendChild(formTag);
    contentDiv.appendChild(formDiv);
}

