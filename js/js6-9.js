/**
 * Created by zhangtibin on 2018/6/15.
 */
// JavaScript Document
function $$(id) {
    return document.getElementById(id);
}
function v_move(v) {
    $$("pTip").style.display=(v)?"block":"none";
}
function v_loadstart() {
    $$("apnPlayTip").innerHTML="开始加载";
}
function v_playing() {
    $$("spnPlayTip").innerHTML="正在播放";
}
function v_pause() {
    $$("apnPlayTip").innerHTML="已经暂停";
}
function v_ended() {
    $$("apnPlayTip").innerHTML="播放完成";
}
function v_timeupdate(e) {
    var strCurTime= RuleTime(Math.floor(e.currentTime/60), 2)+":"+RuleTime(Math.floor(e.currentTime%60), 2);
    var strEndTime = RuleTime(Math.floor(e.duration/60), 2)+":"+RuleTime(Math.floor(e.duration%60),2);
    $$("spnTimeTip").innerHTML=strCurTime+"/"+strEndTime;
}
//转换时间显示格式
function RuleTime(num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}