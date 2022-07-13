let oWrap = document.getElementById("wrap");
let oList = document.getElementById("list");

let left = 0;
let temps;
oList.innerHTML += oList.innerHTML;
function move() {
    clearInterval(temps);
    temps = setInterval(function () {
        left -= 4;
        if (left < -1010) {
            left = 0
        }
        oList.style.left = left + "px";
    }, 20);
}
move();
oList.onmouseenter = function () {
    clearInterval(temps);
};
oList.onmouseleave = function () {
    move();
};