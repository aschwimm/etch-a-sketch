document.addEventListener("DOMContentLoaded", drawGrid());

function drawGrid(gridRows = 16, gridColumns = 16) {
    const container = document.querySelector(".container");
    container.replaceChildren();
    for(let i = 0; i < gridRows; i++) {
        const subContainer = document.createElement("div");
        subContainer.classList.add("sub-container")
        for(let j = 0; j < gridColumns; j++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            subContainer.appendChild(gridElement);
        }
        container.appendChild(subContainer);
    }
    const allGridElements = document.querySelectorAll(".grid-element");
    // Change the background color of a grid element once mouse moves through the individual grid element
    allGridElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            element.classList.add("moused-over");
        })
    })
}
