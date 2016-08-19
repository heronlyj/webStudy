

var checkSourceFunc = function(sourceNum) {
    switch (true) {
        case sourceNum >= 90 && sourceNum <= 100:
            return "1等生";
        case sourceNum >= 80 && sourceNum < 90:
            return "2等生";
        case sourceNum >= 70 && sourceNum < 80:
            return "3等生";
        case sourceNum >= 60 && sourceNum < 70:
            return "4等生";
        case sourceNum < 60:
            return "不及格";
        default:
            return "您的成绩不符合逻辑,建议重考";
    }
};

var btn = document.getElementById('checkBtn');

btn.onclick = function () {
    var sorceInput = document.getElementById('sorceInput');
    var source = sorceInput.value;
    alert(checkSourceFunc(source));
};