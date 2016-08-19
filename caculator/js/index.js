
// 最终结果
var result = "";

// 保持运算符
var method = "";

// 计算
var calcuateFunc = function(x,y,operator) {

}

// 获取 button 父视图
var buttonWrap = document.getElementById("buttonWrap");

// 所有 button 的点击事件都在父容器内捕获 
buttonWrap.onclick = function(event) {
    // 获得点击事件
    var event = event || window.event;
    // 获得时间 target
    var btn = event.target || event.srcElement;
    // 获得 btn value
    var value = btn.value;

    // 匹配按钮
    switch(true) {

        case 
            value == 0 || 
            value == 1 || 
            value == 2 || 
            value == 3 || 
            value == 4 || 
            value == 5 || 
            value == 6 || 
            value == 7 ||
            value == 8 ||
            value == 9 :

            console.log("输入的是数字" + value);
            break;

        case value == "+" || value == "-" || value == "X" || value == "/":
            console.log("加减乘除");
            break;

        case value == ".":
            console.log("输入了小数点,后面的数字为小数");
            break;

        case value == "ac":
            console.log("清零运算"); 
            break;

        case value == "%":
            console.log("求百分之一");
            break;

        case value == "-/+":
            console.log("求相反数");
            break;

        default: break;
         
    }

}