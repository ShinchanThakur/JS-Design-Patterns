let clickCount = 0;
const catImg = document.getElementById("catImage");
const clickCountElement = document.getElementById("clickCount");

catImg.addEventListener("click", () => {
    clickCount++;
    clickCountElement.textContent = clickCount;
});