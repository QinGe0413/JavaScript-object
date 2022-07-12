let aLi = document.querySelectorAll("#container ul li");
let oAll = document.querySelector("#container .btn .all");
let oNoAll = document.querySelector("#container .btn .noAll");
let oReverse = document.querySelector("#container .btn .reverse");

//默认0,代表什么都没有选中
let count = 0;
for (let i = 0; i < aLi.length; i++) {
    //false代表没有选中
    aLi[i].mark = false;
    aLi[i].onclick = function () {
        if (aLi[i].mark) {
            count--;
            aLi[i].mark = false;
        } else {
            // 点击了选中 使得count + 1
            count++;
            aLi[i].mark = true;
        }
        aLi[i].classList.toggle("checked");
        //判断 8为全选 0为全取消
        switch (count) {
            case 8:
                oAll.classList.add("checked");
                oNoAll.classList.remove("checked");
                break;
            case 0:
                oAll.classList.remove("checked");
                oNoAll.classList.add("checked");
                break;
            default:
                oAll.classList.remove("checked");
                oNoAll.classList.remove("checked");
                break;
        }
    }
}
//全选功能
oAll.onclick = function () {
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].classList.add("checked");
        aLi[i].mark = true;
        count = 8;
    }
    countNum(count);
};
//全不选功能
oNoAll.onclick = function () {
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].classList.remove("checked");
        aLi[i].mark = false;
        count = 0;
    }
    countNum(count);
}
//反选功能
oReverse.onclick = function () {
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].classList.toggle("checked");

        if (aLi[i].mark) {
            count--;
            aLi[i].mark = false;
        } else {
            // 点击了代表选中 使得count + 1
            count++;
            aLi[i].mark = true;
        }
    }
    countNum(count);
}
// 把判断抽取出来, 减少代码冗余
function countNum(n) {
    switch (n) {
        case 8:
            oAll.classList.add("checked");
            oNoAll.classList.remove("checked");
            break;
        case 0:
            oAll.classList.remove("checked");
            oNoAll.classList.add("checked");
            break;
        default:
            oAll.classList.remove("checked");
            oNoAll.classList.remove("checked");
            break;
    }
}