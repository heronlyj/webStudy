
// 最终结果
var x = 0;
var y = 0;

// 保持运算符
var method = "";

// 记录是否有小数点
var dotNumber = 0;
var dotCount = 0;

// 记录是否更新了结果，例如按了运算符之后，如果这个时候直接按数字的话，就重新开始计算
var updateResult = false;

// 将结果显示到界面上
var showResult = function (operatorResult) {

    var lcd = document.getElementById("lcd");
    lcd.textContent = operatorResult;
    lcd.innerText = operatorResult;

    var uncomplete = document.getElementById("uncomplete");

    if (method === "") {
        console.log("method is empty");
        uncomplete.textContent = "";
        uncomplete.innerText = "";
    } else {
        var r = x.toString() + " " + method + " " + (y === 0 ? "" : y.toString());
        uncomplete.textContent = r;
        uncomplete.innerText = r;
    }
}

// 计算
var calcuateFunc = function (a, operatorMethod, b) {
    switch (true) {
        case operatorMethod === "+":
            return a + b;

        case operatorMethod === "-":
            return a - b;

        case operatorMethod === "x":
            return a * b;

        case operatorMethod === "/":
            // 调整精度 与 NaN 的情况
            return b === 0 ? NaN : parseFloat((a / b).toFixed(3));

        default:
            return a;
    }
}

// 计算
var matchMethod = function (value) {

    // 匹配按钮
    switch (true) {
        case
            value === "0" ||
            value === "1" ||
            value === "2" ||
            value === "3" ||
            value === "4" ||
            value === "5" ||
            value === "6" ||
            value === "7" ||
            value === "8" ||
            value === "9":

            console.log("method front");

            if (method === "") {
                console.log("如果不存在运算符更新第一个算子");
                // 如果不存在运算符更新第一个算子
                if (dotNumber === 0) {

                    if (updateResult) {
                        x = 0;
                        updateResult = false;
                    }

                    x = 10 * x + parseInt(value);
                    // x = x.tof
                } else {

                    if (updateResult) {
                        x = 0;
                        updateResult = false;
                    }

                    x = x + parseInt(value) * dotNumber;
                    dotNumber = dotNumber * 0.1;
                    dotCount += 1;
                    x = parseFloat(x.toFixed(dotCount));
                }

                showResult(x);
            } else {
                // 更新第二个算子
                console.log("更新第二个算子");
                if (dotNumber === 0) {
                    y = 10 * y + parseInt(value);
                } else {
                    y = y + parseInt(value) * dotNumber;
                    dotNumber = dotNumber * 0.1;
                    dotCount += 1;
                    y = parseFloat(y.toFixed(dotCount));
                }

                showResult(y);
            }

            console.log("输入的是数字" + value);
            break;

        case value === "+" || value === "-" || value === "x" || value === "/":

            dotNumber = 0;
            dotCount = 0;

            if (/* method === "" || */ y === 0) {
                method = value;
            } else {
                x = calcuateFunc(x, method, y);
                method = value;
                y = 0;
            }
            showResult(x);

            console.log("加减乘除");
            break;

        case value === ".":
            if (dotNumber === 0) {
                dotNumber = 0.1;
            }
            console.log("输入了小数点,后面的数字为小数");
            break;

        case value === "ac":
            x = 0;
            y = 0;
            dotNumber = 0;
            method = "";
            showResult(x);
            console.log("清零运算");
            break;

        case value === "%":

            if (method === "") {
                x = x / 100;
                showResult(x);
            } else {
                y = y / 100;
                showResult(y);
            }
            console.log("求百分之一");
            break;

        case value === "-/+":

            if (method === "") {
                x = -x;
                showResult(x);
            } else {
                y = -y;
                showResult(y);
            }
            console.log("求相反数");
            break;

        case value === "=":
            x = calcuateFunc(x, method, y);
            method = "";
            y = 0;
            // 计算了结果之后 需要将 x 清理掉
            showResult(x);
            updateResult = true;
            break;

        case value === "sin":
            if (method === "") {
                x = Math.sin(x);
                showResult(x);
            } else {
                y = Math.sin(y);
                showResult(y);
            }
            updateResult = true;
            console.log("求正弦");
            break;

        case value === "cos":
            if (method === "") {
                x = Math.cos(x);
                showResult(x);
            } else {
                y = Math.cos(y);
                showResult(y);
            }
            updateResult = true;
            console.log("求余弦");
            break;

        case value === "tan":
            if (method === "") {
                x = Math.tan(x);
                showResult(x);
            } else {
                y = Math.tan(y);
                showResult(y);
            }
            updateResult = true;
            console.log("求正切");
            break;

        case value === "cot":
            if (method === "") {
                x = 1/Math.tan(x);
                showResult(x);
            } else {
                y = 1/Math.tan(y);
                showResult(y);
            }

            updateResult = true;
            console.log("求余切");
            break;

        default: break;

    }


}


// $("#buttonWrap").click(function(event){

//     console.log("点击事件");

//     // 获得点击事件
//     var event = event || window.event;
//     // 获得时间 target
//     var btn = event.target || event.srcElement;
//     // 获得 btn value
//     var value = btn.value;
//     // 匹配运算符还是数字
//     matchMethod(value);
// });

// // 获取 button 父视图
// var buttonWrap = document.getElementById("buttonWrap");

// buttonWrap.addEventListener("onClick",function(event) {
//     // 获得点击事件
//     var event = event || window.event;
//     // 获得时间 target
//     var btn = event.target || event.srcElement;
//     // 获得 btn value
//     var value = btn.value;
//     // 匹配运算符还是数字
//     matchMethod(value);

// });

// 所有 button 的点击事件都在父容器内捕获 
buttonWrap.onclick = function (event) {
    // 获得点击事件
    var event = event || window.event;
    // 获得时间 target
    var btn = event.target || event.srcElement;
    // 获得 btn value
    var value = btn.value;
    // 匹配运算符还是数字
    matchMethod(value);
}