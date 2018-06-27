/**
 * Created by zhangtibin on 2018/6/27.
 */
function $$(id) {
    return document.getElementById(id);
}
//检测 manifest 文件是否有更新
function pageload() {
    if (window.applicationCache.status == 4) {
        Status_Handle("找到可更新的本地缓存！");
        $$("pShow").style.display = "block";
    }
}
//单击"手动更新"按钮时调用
function btnUpd_Click() {
    window.applicationCache.update();
    Status_Handle("手动更新完成！");
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}