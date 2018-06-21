/**
 * Created by zhangtibin on 2018/6/21.
 */
function $$(id) {
    return document.getElementById(id);
}
//上下移动已绘制的正方形
function pageload() {
    var cnv = $$("cnvMain");
    var cxt = cnv.getContext("2d");
    //设置左上方向的阴影
    cxt.shadowOffsetX = -6;
    cxt.shadowOffsetY = -6;
    cxt.shadowColor = "#ccc";
    cxt.shadowBlur = 1;
    cxt.fillStyle = "#eee";
    cxt.fillRect(20,28,100,130);
    //设置右下方向的阴影
    cxt.shadowOffsetX = 6;
    cxt.shadowOffsetY = 6;
    cxt.shadowColor = "#ccc";
    cxt.shadowBlur = 10;
    cxt.fillStyle = "#eee";
    cxt.fillRect(150,28,100,130);
}
