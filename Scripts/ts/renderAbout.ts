export function renderAbout(){

    const contentDiv = document.getElementById("content") as HTMLDListElement;

    contentDiv.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.textContent="Info bla bla bla";
    contentDiv.appendChild(h1);

    const pInfoText = document.createElement("p");

    pInfoText.textContent = "Praesent eu maximus est, pharetra euismod dui. Donec pretium, enim at volutpat mattis, orci metus vehicula mi, vitae ultrices purus velit ac sapien. Cras fermentum, tortor nec fermentum scelerisque, leo erat sollicitudin tortor, sit amet posuere elit est ac eros. Etiam pulvinar nulla ligula, at lobortis nisl consequat in."
    contentDiv.appendChild(pInfoText);

    const secondInfoText = document.createElement("p");
    secondInfoText.textContent = "Aliquam vehicula, neque porta mattis mollis, nisi ipsum tristique ipsum, id ornare odio lacus sed nisi. Nulla eleifend vehicula consequat. Donec ac rutrum nisi. Cras malesuada, tellus vel eleifend maximus, risus lorem egestas neque, at rhoncus nulla dolor mollis augue. Integer lectus mi, porta a laoreet elementum, egestas sit amet mi. Curabitur sagittis diam at est fringilla, a interdum lacus luctus. Nullam accumsan tincidunt tortor, ut auctor augue venenatis sed.";  
    contentDiv.appendChild(secondInfoText);

    const courseDiv = document.createElement("div");
    courseDiv.classList.add("courses");
    const ulTag = document.createElement("ul");

    for(let i = 0; i < 10; i++){
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