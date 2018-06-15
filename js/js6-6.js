/**
 * Created by zhangtibin on 2018/6/15.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function Video_Error(e) {
    var intState = e.error.code;
    $$("apnStatus").style.display = "block";
    $$("apnStatus").innerHTML = ErrorByNum(intState);
}
function ErrorByNum(n) {
    switch (n) {
        case 1:
            return "加载异常, 用户请求中止";
        case 2:
            return "加载中止，网络错误！";
        case 3:
            return "加载完成，解码出错";
        case 4:
            return "没有找到支持的播放格式！";
    }
}
function load_start(e) {
    alert(e.readyState);
}
function progress(e) {
    var  strCurrTime = RuleTime(Math.floor(e.currentTime/60),2)+":"+RuleTime(Math.floor(e.currentTime%60), 2);
    alert(strCurrTime);
}
// 转换时间显示格式
function RuleTime(num, n) {
    var len = num.toSource().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}