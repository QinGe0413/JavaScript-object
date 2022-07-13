let oLeft = document.querySelector("#wrap .arrow .left");
let oRight = document.querySelector("#wrap .arrow .right");
let oImglist = document.querySelector("#wrap .imglist");
let oWrap = document.getElementById("wrap");
let oCircles_List = document.querySelectorAll("#wrap .circles li");
let oCircles_ol = document.getElementById("circles-ol");
//clone第一张图片到最后
let imgClone = oImglist.firstElementChild.cloneNode("true");
//把clone的图片添加进列表(上树)
oImglist.appendChild(imgClone);
//设置节流锁
let lock = true;
//定义index 表示正在显示的图片
let index = 0;

function right_btn_handler() {
    //设置节流锁
    if (!lock) return;
    lock = false;
    setTimeout(function () {
        lock = true;
    }, 700)
    index++;
    //给图片重新设置过渡
    oImglist.style.transition = ".7s ease";
    //判断是否式最后一张图片 
    if (index > 4) {
        setTimeout(function () {
            oImglist.style.transition = "none";
            oImglist.style.left = 0;
            index = 0;
        }, 700)
    }
    oImglist.style.left = -index * 1030 + "px";
    setCircle();
};
oRight.onclick = right_btn_handler;

oLeft.onclick = function () {
    //设置节流锁
    if (!lock) return;
    lock = false;
    setTimeout(function () {
        lock = true;
    }, 700)
    if (index === 0) {
        //瞬间拉到最后一张图片上
        oImglist.style.transition = "none";
        oImglist.style.left = -5 * 1030 + "px";
        index = 4;
        //小技巧  利用异步延时0毫秒 可以瞬间移动到最后一张假图的时候 再加上过渡 拉到index为4的图片上
        setTimeout(function () {
            oImglist.style.transition = ".7s ease";
            oImglist.style.left = -index * 1030 + "px";
        }, 0)
    } else {
        index--;
        oImglist.style.left = -index * 1030 + "px";
    }
    setCircle();
};
//设置自动轮播
let timer = setInterval(right_btn_handler, 1800);

//设置鼠标进入停止自动轮播
wrap.onmouseenter = function () {
    clearInterval(timer);
};
//设置鼠标离开重新开始轮播
wrap.onmouseleave = function () {
    clearInterval(timer);
    timer = setInterval(right_btn_handler, 1800);
}

//设置小圆点
function setCircle() {
    //遍历小圆点
    for (let i = 0; i <= 4; i++) {
        //判断与图片序号是否一致   0-4 只有5个小圆点 但有6张图 index % 5 == 0
        if (i === index % 5) {
            oCircles_List[i].classList.add("active");
        } else {
            oCircles_List[i].classList.remove("active");
        }
    }
}

//使用事件委托 设置小圆点监听切换图片
oCircles_ol.onclick = function (e) {
    //先使用"tagName.toLowerCase()"判断是否选中的是li元素
    if (e.target.tagName.toLowerCase() == "li") {
        //获取到点击的e.target相对应的自定义属性
        //getAttribute() 获取自定义属性
        let n = Number(e.target.getAttribute("data-n"));
        //改变index (必须设置 否则就乱套了)
        index = n;
        //拉动图片
        oImglist.style.left = -index * 1030 + "px";
        //设置小圆点
        setCircle();
    }
}