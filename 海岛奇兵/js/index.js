var arrJson = [
    {   //  1
        width: 780,
        opacity:20,
        z: 2
    },
    {  // 2
        width: 780,
        opacity:80,
        z: 3
    },
    {   // 3
        width: 780,
        opacity:100,
        z: 4
    },
    {  // 4
        width: 780,
        opacity:80,
        z: 3
    },
    {   //5
        width:780,
        opacity:20,
        z:2
    }
];

var timer = null;
var aLi = $("li", $("#luobo"));

autoplay();

var oPrev = $("a", $("#qiehuan"))[0];
var oNext = $("a", $("#qiehuan"))[1];

oNext.onclick = function () {
    autoplay(true);
}
oPrev.onclick = function () {
    autoplay(false);
}
function autoplay(onOff) {
    if (onOff != undefined) {
        if (onOff) {
            arrJson.push(arrJson.shift());
        } else {
            arrJson.unshift(arrJson.pop());
        }
    }
    for (var i = 0; i < aLi.length; i++) {
        startMove(aLi[i], arrJson[i], 10);
    }
}
timer = setInterval(function () {
    autoplay(false);
}, 2500);

$("#luobo").onmouseover = function () {
    clearInterval(timer);
}
$("#luobo").onmouseout = function () {
    timer = setInterval(function () {
        autoplay(false);
    }, 2500);
}
