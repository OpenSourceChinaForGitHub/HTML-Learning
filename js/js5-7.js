/**
 * Created by zhangtibin on 2018/6/14.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
//选择文件上传时调用函数
function fileUplaod_ReadTxtFile(f) {
    //检测浏览器是否支持 FileReader 对象
    if (typeof FileReader == 'undefined') {
        alert("检测到您的浏览器不支持 FileReader 对象");
    }
    var tmpFile = f[0];
    var reader = new FileReader();
    reader.readAsText(tmpFile);
    reader.onload = function (e) {
        $$("artShow").innerHTML = "<pre>" + e.target.result + "</pre>";
    }
}