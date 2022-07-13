let aTap = document.querySelectorAll("#wrap .tab li");
let aUl = document.querySelectorAll("#wrap .content ul");

for (let i = 0; i < aTap.length; i++) {
    aTap[i].onclick = function () {
        for (let j = 0; j < aUl.length; j++) {
            aTap[j].classList.remove("active");
            aUl[j].classList.remove("show");
        }
        aTap[i].classList.add("active");
        aUl[i].classList.add("show");
    }
}