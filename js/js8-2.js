/**
 * Created by zhangtibin on 2018/6/22.
 */
function $$(id) {
    return document.getElementById(id);
}
//页面加载时调用的函数
function pageload() {
    var strName = localStorage.getItem("keyName");
    var strPass = localStorage.getItem("keyPass");
    if (strName) {
        $$("txtName").value = strName;
    }
    if (strPass) {
        $$("strPass").value = strPass;
    }
}
//单击"登录"按钮后调用的函数
function btnLogin_click() {
    var strName = $$("txtName").value;
    var strPass = $$("txtPass").value;
    localStorage.getItem("keyName", strName);
    if ($$("chkSave").checked) {
        localStorage.set("keyPass",strPass);
    }
    else {
        localStorage.removeItem("keyPass");
    }
    $$("spnStatus").className = "status";
    $$("spnStatus").innerHTML = "登录成功！";
}