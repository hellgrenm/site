export function renderHome() {
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
    const imageBlock = document.createElement("div");
    const link = document.createElement("a");
    link.href = "hangman.html";
    imageBlock.classList.add("imageBlock");
    const image = document.createElement("img");
    image.src = "images/hangman.png";
    const pInfo = document.createElement("p");
    pInfo.textContent = "Play hangman";
    link.appendChild(image);
    imageBlock.appendChild(link);
    imageBlock.appendChild(pInfo);
    pictureDiv.appendChild(imageBlock);
    contentDiv.appendChild(pictureDiv);
    for (let i = 0; i < 2; i++) {
        const imageBlock = document.createElement("div");
        const link = document.createElement("a");
        link.href = "";
        imageBlock.classList.add("imageBlock");
        const image = document.createElement("img");
        image.src = "images/example.png";
        const pInfo = document.createElement("p");
        pInfo.textContent = "Coming soon";
        link.appendChild(image);
        imageBlock.appendChild(link);
        imageBlock.appendChild(pInfo);
        pictureDiv.appendChild(imageBlock);
        contentDiv.appendChild(pictureDiv);
    }
}
