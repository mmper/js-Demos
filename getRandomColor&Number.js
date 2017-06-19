//方案一:
//指定随机数
function rn(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//指定随机颜色
function rc(min, max) {
    var r = rn(min, max);
    var g = rn(min, max);
    var b = rn(min, max);
    return `rgb(${r},${g},${b})`;
}

//方案二:
//创建一个方法，用来返回随机的颜色
var getRandomColor = function () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var R = r.toString(16);
    var G = g.toString(16);
    var B = b.toString(16);
    return '#' + R + G + B;
}