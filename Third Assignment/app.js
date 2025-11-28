let textBox = document.getElementById("text-box");
let handleBox = document.getElementById("handle-box");

let dragging = false;
let startX, startY, startW, startH;

handle.addEventListener("mousedown", e => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    let rect = textBox.getBoundingClientRect();
    startW = rect.width;
    startH = rect.height;
});

document.addEventListener("mousemove", e => {
    if (!dragging) return;

    let newW = startW + (e.clientX - startX);
    let newH = startH + (e.clientY - startY);

    textBox.style.width = newW + "px";
    textBox.style.height = newH + "px";
});

document.addEventListener("mouseup", () => {
    dragging = false;
});
