/**
 * Created by zhangtibin on 2018/6/22.
 */
function $$(id) {
    return document.getElementById(id);
}
//输入文本内容时调用的函数
function txtName_change(v) {
    var strName = v.value;
    sessionStorage.setItem("strName", strName);
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = sessionStorage.getItem("strName");
}
//单击"读取"按钮时调用的函数
function btnGetValue_click() {
    $$("pStatus").style.display = "block";
    $$("pStatus").innerHTML = sessionStorage.getItem("strName");
}