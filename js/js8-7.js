/**
 * Created by zhangtibin on 2018/6/25.
 */
function $$(id) {
    return document.getElementById(id);
}
var db;
//单击"创建数据库"按钮时调用
function btnCreateDb_Click() {
    db = openDatabase('Student','1.0','StuManage',2*1024*1024,function () {
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML = "数据库创建成功！";
    });
}
//单击"测试连接"按钮时调用
function btnTestConn_Click() {
    if (db) {
        $$("pStatus").style.display = "block";
        $$("pStatus").innerHTML = "数据库连接成功！";
    }
}