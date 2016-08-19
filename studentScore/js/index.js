

// 匹配成绩
var checkSourceFunc = function(sourceNum) {
    // 非空判断
    if (sourceNum == "") {
        return "请输入内容";
    }

    switch (true) {
        case sourceNum >= 90 && sourceNum <= 100:
            return "1等生";
        case sourceNum >= 80 && sourceNum < 90:
            return "2等生";
        case sourceNum >= 70 && sourceNum < 80:
            return "3等生";
        case sourceNum >= 60 && sourceNum < 70:
            return "4等生";
        case sourceNum >= 0 && sourceNum < 60:
            return "不及格";
        default:
            return "您的成绩不符合逻辑,建议重考";
    }
};

// 获得提交 button
var btn = document.getElementById('checkBtn');

// 点击事件
btn.onclick = function () {
    var sorceInput = document.getElementById('sorceInput');
    var source = sorceInput.value;
    alert(checkSourceFunc(source));
};