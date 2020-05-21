/* 物件 */
var hotel = {
    // 這些是特性和變數
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['tein', 'double', 'suite'],

    // 方法(函式)
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}; 
// 呼叫物件內的變數或函式
var hotelName = hotel.name;
//var hotelName = hotel['name'];
var roomsFree = hotel.checkAvailability();

// 建立空的物件
var hotel new Object();
hotel.name = 'Quay',
hotel.rooms = 40,
hotel.booked = 25,
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
}

// 建立多個物件：建構子表示法
function Hotel(name, rooms, booked){
    // this意思是取代物件名稱(this關鍵字)
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
// 使用建構子表示法建立和存取物件
var details = quayHotel.name +  ' rooms: ';
    details += quayHotel.checkAvailability();
var elHotel = document.getElementById('hotel');
elHotel.textContent = details;  

// 新增和移除特性 
var hotel = {
    name : 'Park',
    rooms : 120,
    booked : 77,
};
hotel.gym = true;       //新增
delete hotel.booked;    //移除
var elGym = document.getElementById('gym');
elGym.className = 'Gym: ' + hotel.gym;

// 陣列即為物件 & 物件中的陣列與物件在陣列中
costs = {
    room1: 420,
    room2: 460,
    room3: 230,
    room4: 620,
}
costs = [420, 460, 230, 620];

// 物件中的陣列
costs.room1.items[0];

// 陣列中的物件
costs[2].phone;

// 內建物件
document.getElementById('one');   // 選擇器 one
document.lastModified;            // 顯示此頁面最後更動的時間

// 瀏覽器物件模型：
window.innerHeight;
window.innerWidth;
window.pageXOffset;
window.pageYOffset;
window.screenX;
window.screenY;
window.location;
window.document;
window.history;
window.history.length;
window.screen;
window.screen.width;
window.screen.height;
window.alert();
window.open();
window.print();

// 操作瀏覽器物件模型*
var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p>heignt: ' + window.innerHeight + '</p>';
msg += '<h2>history</h2><p>items: ' + window.history + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location); 

// 文件類型物件模型
document.title
document.lastModified
document.URL
document.domain
document.write();
document.getElementById();
document.querySelectorAll();
document.createElement();
document.createTextNode();

//全域 string 物件 
var saying = 'Home sweet home ';
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
msg += '<h2>character</h2><p>' + saying.charAt(12) + '</p>';
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
msg += '<h2>character</h2><p>' + saying.substring(8, 14) + '</p>';
msg += '<h2>replace</h2><p>' + saying.replace('me','w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;

// number物件
isNaN();         //檢查是否為數值
toFixed();       //四捨五入後指定位數
toPrecision();   //四捨五入到指定位數
toExponential(); //以指數表示法顯示數值

// MATH物件
Math.PI;
Math.round();   //四捨五入
Math.sqrt(n);   //開根號
Math.ceil();    //向上取整數
Math.floor();   //向下取整數
Math.random();  //隨機產生0(包含)與1(不包含)之間的數值

// DATE物件實體
var today = new Date();
today.getDate();
today.getDay();
today.getFullYear();
today.getHours();
today.getMilliseconds();
today.getMinutes();
today.getMonth();
today.getSeconds();
today.getTime();
today.getTimezoneOffset();
today.toDateString();
today.toTimeString();
today.toString();

// 活用DATE日期物件
var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';

















