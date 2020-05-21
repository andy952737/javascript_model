/* 函式 */
 var msg = 'Sign up to receive our newdletter for 10% off';
 function updateMessage(){
     var el = document.getElementById('message');
     el.textContent = msg;
 }
 updateMessage();  

 /* 宣告一個需要資訊的函式 */
 function getArea(width, height){
    var area = width * height;
    return area;
 }
 getArea(3,5);

/* 自函式取得多個回傳值 */
function getSize(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3,2,3)[0];
var volume = getSize(3,2,3)[1];
var size = getSize(3,2,3)[0];    //匿名函式與函示運算式

/* 變數有效範圍 */
function getSize(width, height){
    //區域(或函式範圍)有效範圍
    var area = width * height;
    return area;
}
//全域有效範圍
var wallSize = getArea(3,2);
document.write(wallSize);