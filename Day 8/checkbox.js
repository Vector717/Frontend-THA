let container = document.getElementsByClassName("container")[1];

for(let i=1; i<400; i++)
{
    let box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
}

let click_boxes = document.querySelectorAll(".box");
click_boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("white");
    });
});