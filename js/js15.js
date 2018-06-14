/**
 * Created by zhangtibin on 2018/6/14.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
// 检查秘密是否验证成功
function getErrorInfo() {
    var $$Pass_1 = $$("txtPassword_1");
    var $$Pass_2 = $$("txtPassword_2");
    if ($$Pass_1.value == $$Pass_2.value) {
        $$Pass_2.setCustomValidity("✅，两次密码相同");
    }
    else  {
        $$Pass_2.setCustomValidity("❎，两次密码不一致！");
    }
}