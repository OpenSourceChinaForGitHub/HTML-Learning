/**
 * Created by zhangtibin on 2018/6/19.
 */
function $$(id) {
    return document.getElementById(id);
}
function pageLoad() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    cxt.fillStyle = "#ccfede";
    cxt.fillRect(30,30,80,80);
}