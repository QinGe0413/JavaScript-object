(function () {
    //假装请求到了后台数据
    let oUl = document.querySelector(".goods");
    let aBtn = document.querySelectorAll(".btn li");

    let data = [
        {
            src: "./img/xh_img1.jpg",
            price: 100,
            title: "深红色经典玫瑰",
        },
        {
            src: "./img/xh_img2.jpg",
            price: 97,
            title: "甜美七分袖荷叶边条纹设",
        },
        {
            src: "./img/xh_img3.jpg",
            price: 99.5,
            title: "甜美七分袖荷叶边条纹设",
        },
        {
            src: "./img/xh_img4.jpg",
            price: 215,
            title: "甜美七分袖荷叶边条纹设",
        },
        {
            src: "./img/xh_img5.jpg",
            price: 130,
            title: "经典红色我的最爱",
        },
        {
            src: "./img/xh_img6.jpg",
            price: 300,
            title: "清淡优雅百年百合",
        },
        {
            src: "./img/xh_img7.jpg",
            price: 700,
            title: "紫色冷艳系列",
        },
        {
            src: "./img/xh_img8.jpg",
            price: 500,
            title: "粉色浪漫系列玫瑰",
        },
    ];

    function init() {
        let html = "";
        data.forEach((item, index) => {
            html += `<li>
<img width="190" height="190" src="${item.src}" alt="">
<p class="price">￥<b>${item.price}</b></p>
<p class="title">${item.title}</p>
  </li>`;
        });
        oUl.innerHTML = html;
    }
    init();

    let fnArr = [
        (a, b) => Math.random() - 0.5,
        (a, b) => a.price - b.price,
        (a, b) => b.price - a.price,
    ];

    aBtn.forEach((item, index) => {
        item.onclick = function () {
            //对data进行排序 --- 根据index来决定我们用什么函数排序
            data.sort(fnArr[index]);
            //重新渲染新的页面结构
            init();
        };
    });

    //btn的点击按钮
    //(function () {
    // 随机排序
    //  aBtn[0].onclick = function () {
    //  let fn = (a, b) => Math.random() - 0.5;

    //对data进行排序
    // data.sort(fn); // -0.5 - 0.5

    //重新渲染新的页面结构
    //init();
    //  };

    //  //   从低到高
    //  aBtn[1].onclick = function () {
    //    let fn = (a, b) => a.price - b.price;
    //对data进行排序
    //    data.sort(fn);

    //    //重新渲染新的页面结构
    //    init();
    //  };

    //  //   从高到低
    //  aBtn[2].onclick = function () {
    //    let fn = (a, b) => b.price - a.price;

    //对data进行排序
    //    data.sort(fn);

    //    //重新渲染新的页面结构
    //    init();
    //  };
    //})();

    ////btn的点击按钮
    //(function () {
    //  //随机排序
    //  aBtn[0].onclick = function () {
    //对data进行排序
    //    data.sort((a, b) =>  Math.random() - 0.5); // -0.5 - 0.5

    //    //重新渲染新的页面结构
    //	init();
    //  };

    ////   从低到高
    //  aBtn[1].onclick = function () {
    //对data进行排序
    //    data.sort((a, b) =>   a.price - b.price );

    //    //重新渲染新的页面结构
    //	init();
    //  };

    ////   从高到低
    //  aBtn[2].onclick = function () {
    //对data进行排序
    //    data.sort((a, b) =>   b.price - a.price );

    //    //重新渲染新的页面结构
    //	init();
    //  };
    //})();
})();