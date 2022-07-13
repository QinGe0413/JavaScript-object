(function () {
    // 模拟的数据
    let dataArr = ["马来西亚", "泰国", "三亚", "新西兰", "云南"];
    //获取对应的元素
    let left_top = document.querySelector(".left-top");
    let left_bottom_ul = document.querySelector(".left-bottom");
    let right_ul = document.querySelector(".right ul");
    //用于检测对应标签有没有点击过
    let ifClickArr = [];
    let frag = document.createDocumentFragment();
    dataArr.forEach(function (item, index) {
        console.log(item, index);
        //创建a标签 孤儿节点
        let oA = document.createElement("a");
        //超链接对应的href
        oA.href = "javascript:;";
        //超链接的内容
        oA.innerHTML = item;
        //a标签的点击事件
        oA.onclick = function () {
            //判断对应的内容有没有重复生成过
            if (ifClickArr[index]) return;
            ifClickArr[index] = true;
            ////给左边ul 添加内容
            //createLeftUlNode(index);
            ////给右边ul 添加内容
            //createRightUlNode(index);
            createNode(index);
        };
        //把a标签放到文档碎片中
        frag.appendChild(oA);
    });
    //文档碎片推入left_top
    left_top.appendChild(frag);
    ////左边ul对应的函数
    //function createLeftUlNode(index) {
    //  let li = document.createElement("li");
    //  let i = document.createElement("i");
    //  li.innerHTML = dataArr[index];
    //  i.innerHTML = "x";
    //  //每一个i有点击事件
    //  i.onclick = function () {
    //    //干掉自己对应li
    //    left_bottom_ul.removeChild(li);
    //    //this.parentNode.parentNode.removeChild(this.parentNode);
    //  };
    //  li.appendChild(i);
    //  left_bottom_ul.appendChild(li);
    //}
    ////定义右边ul对应的函数
    //function createRightUlNode(index) {
    //  let li = document.createElement("li");
    //  li.innerHTML = dataArr[index];
    //  right_ul.appendChild(li);
    //}
    //创建节点
    function createNode(index) {
        let leftLi = document.createElement("li");
        let rightLi = document.createElement("li");
        //创建左边
        let i = document.createElement("i");
        leftLi.innerHTML = dataArr[index];
        i.innerHTML = "x";
        //每一个i有点击事件
        i.onclick = function () {
            //干掉自己对应li
            left_bottom_ul.removeChild(leftLi);
            right_ul.removeChild(rightLi);
            ifClickArr[index] = false;
            //this.parentNode.parentNode.removeChild(this.parentNode);
        };
        leftLi.appendChild(i);
        left_bottom_ul.appendChild(leftLi);
        //创建右边的
        rightLi.innerHTML = dataArr[index];
        right_ul.appendChild(rightLi);
    }
})();