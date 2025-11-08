export function renderHome() {
 
  const contentDiv = document.getElementById("content") as HTMLDivElement;
  contentDiv.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "Lorem Ipsum";
  contentDiv.appendChild(h1);

  const pTag = document.createElement("p");
  pTag.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt tortor ut tincidunt ullamcorper. Donec vitae fringilla quam, quis ullamcorper nunc. Maecenas condimentum est interdum, molestie nunc nec, efficitur orci. In hac habitasse platea dictumst. Etiam fermentum odio interdum erat ultrices molestie."
  contentDiv.appendChild(pTag);
  const pictureDiv = document.createElement("div");
  pictureDiv.classList.add("pictureDiv");

    for (let i = 0; i < 3; i++){

    const imageBlock = document.createElement("div");
    imageBlock.classList.add("imageBlock");
    const image = document.createElement("img");
    image.src = "../images/example.png";
    const pInfo = document.createElement("p");
    pInfo.textContent = "Info here";
    imageBlock.appendChild(image);
    imageBlock.appendChild(pInfo);
    pictureDiv.appendChild(imageBlock);
    }

    contentDiv.appendChild(pictureDiv);

}