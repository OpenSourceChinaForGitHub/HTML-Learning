/**
 * Created by zhangtibin on 2018/6/19.
 */
function $$(id) {
    return document.getElementById(id);
}
function pageload() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    cxt.moveTo(130,130);
    cxt.lineTo(30,100);
    cxt.lineTo(130,160);
    cxt.lineWidth = 3;
    cxt.stroke();
}