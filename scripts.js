document.addEventListener("DOMContentLoaded", drawGrid(16, 16));

function drawGrid(gridRows, gridColumns) {
    const container = document.querySelector(".container");
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
}
