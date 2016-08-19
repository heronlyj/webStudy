
var list = document.getElementById('test-list');
var children = list.children;

for (var i = 0; i < children.length; i++) {
    for (var j = i+1; j < children.length; j++) {
        if (children[i].innerHTML > children[j].innerHTML) {
            list.insertBefore(children[j], children[i]);
        }
    }
}


var btn = document.getElementById("btn");

btn.onclick = function() {
    alert("按钮点击");
};

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    
}