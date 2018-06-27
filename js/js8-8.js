/**
 * Created by zhangtibin on 2018/6/25.
 */
function $$(id) {
    return document.getElementById(id);
}
var db;
//单击"执行事务"时执行
function btnCreateTrans_Click() {
    //创建/打开数据库
    db = openDatabase('Student','1.0','StuManage',2*1024*1024);
    if (db) {
        var strSQL = "create table if not exists StuInfo";
        strSQL += "(StuID unique,Name text,Sex text,Score int)";
        db.transaction(function (tx) {
            tx.executeSql(strSQL)
        },
        function () {
            Status_Handle("事务执行出错！");
        },
        function () {
            Status_Handle("事务执行成功！");
        })

    }
}
//自定义显示执行过程中状态的函数
function Status_Handle(message) {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = message;
}