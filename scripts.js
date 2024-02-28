document.addEventListener("DOMContentLoaded", drawGrid());

const OPACITY_INCREMENTER = .1;
let isFormDisplayed = false;

document.getElementById("grid-size-form").addEventListener("submit", function(e) {
    e.preventDefault();
    let rows = document.getElementById("grid-rows").value;
    let columns = document.getElementById("grid-columns").value;
    if(rows > 100 || columns > 100){
        alert("Please enter a grid size no larger than 100 x 100");
    } else {
        drawGrid(rows, columns);
    }
})
document.getElementById("grid-dimensions-input").addEventListener("click", () => {
    let gridSizeForm = document.getElementById("grid-size-form");
    if (!isFormDisplayed) {
        gridSizeForm.style.display = "block";
        isFormDisplayed = true;
    } 
    else if (isFormDisplayed) {
        gridSizeForm.style.display = "none";
        isFormDisplayed = false;
    }
})
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
    // Change the opacity of a grid element once mouse moves through the individual grid element
    allGridElements.forEach(function(element) {
        element.addEventListener("mouseenter", function()  {
            let elementOpacity = this.style.opacity;
            if(!this.style.opacity) {
                this.style.opacity = OPACITY_INCREMENTER;
            } else {
                this.style.opacity = parseFloat(elementOpacity) + OPACITY_INCREMENTER;
            }
            this.style.backgroundColor = rgbRandomizer();
        })        
    })
}

// Returns a string template with randomized RGB values
function rgbRandomizer() {
    const randomRbg = () => Math.floor((Math.random() * 255) + 1)
    return `rgb(${randomRbg()}, ${randomRbg()}, ${randomRbg()})`;
}

