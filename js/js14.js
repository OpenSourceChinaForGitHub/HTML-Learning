/**
 * Created by zhangtibin on 2018/6/14.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
// 检测密码是否验证成功
function chkPasswork() {
    var $$Pass = $$("txtPassword");
    var $$spnP = $$("spnPassword");
    var strP;
    if ($$Pass.checkValidity()) {
        strP = "✅";
    }
    else {
        strP = "❎";
    }
    $$spnP.innerHTML = strP;
    return false;
}