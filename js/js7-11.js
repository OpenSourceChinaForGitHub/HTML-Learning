/**
 * Created by zhangtibin on 2018/6/21.
 */
function $$(id) {
    return document.getElementById(id);
}
//定义保存单击次数的全局变量
var intNum = 0;
function cnvclick(cnv) {
    intNum += 1;
    intNum = (intNum == 5) ? 1 : intNum;
    var astrPrnType = "";
    switch (intNum) {
        case 1:
            astrPrnType = "no-repeat";
            break;

        case 2:
            astrPrnType = "repeat-x";
            break;

        case 3:
            astrPrnType = "repeat-y";
            break;

        case 4:
            astrPrnType = "repeat";
            break;
    }
    var cxt = cnv.getContext("2d");
    cxt.clearRect(0,0,cnv.width,cnv.height);
    var objImg = new Image();
    objImg.src = "image/google.png";
    var prn = cxt.createPattern(objImg,astrPrnType);
    objImg.onload = function () {
        cxt.fillStyle = prn;
        cxt.fillRect(0,0,cnv.width,cnv.height);
    }
}