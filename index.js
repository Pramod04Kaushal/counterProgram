const decreaseBtn = document.getElementById("decreasebtn");
const increaseBtn = document.getElementById("increaebtn");
const resetBtn = document.getElementById("resetbtn");
const countLable = document.getElementById("countLable");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function () {
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countLable.textContent = count;
}