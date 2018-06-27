/**
 * Created by zhangtibin on 2018/6/22.
 */
function $$(id) {
    return document.getElementById(id);
}
var intNum = 0;
//单击"添加"按钮时调用
function btnAdd_click() {
    for (var intI = 0; intI <= 5;intI++) {
        var strKeyName = "strKeyName" + intI;
        var strKeyValue = "strKeyValue" + intI;
        localStorage.setItem(strKeyName,strKeyValue);
        intNum ++;
    }
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = "已成功保存<b>" + intNum + "</b>条数据记录！";
}
//单击"清空"按钮时调用
function btnDel_click() {
    localStorage.clear();
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = "已成功清除全部数据记录！";
}