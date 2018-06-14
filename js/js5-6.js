/**
 * Created by zhangtibin on 2018/6/14.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
// 选择上传文件时调用的函数
function fileUpload_PrevImageFile(f) {
    //检测到浏览器是否支持 FileReader 属性
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持 FileReader 对象！");
    }
    var strHTML = "";
    for (var intI = 0; intI < f.length; intI++) {
        var tmpFile = f[intI];
        var reader = new FileReader();
        reader.readAsDataURL(tmpFile);
        reader.onload = function (e) {
            strHTML = strHTML + "<span>";
            strHTML = strHTML + "<img src='" + e.target.result + "' alt=''/>";
            strHTML = strHTML + "</span>";
            $$("ulUpload").innerHTML = "<li>" + strHTML + "</li>";
        }
    }
}