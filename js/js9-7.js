/**
 * Created by zhangtibin on 2018/6/27.
 */
function $$(id) {
    return document.getElementById(id);
}
//自定义页面加载时调用的函数
function pageload() {
    window.applicationCache.addEventListener("updateready",function () {
        Status_Handle("在线");
    },false);
    window.addEventListener("offline",function () {
        Status_Handle("离线");
    },false);
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}