/* 利用變數儲存數值資料 */
var price = 5, quantity = 14;
var total = price * quantity;
var el = document.getElementById('cost');
//var el = document.getElementsByClassName('cost');
el.textContent = '$' + total;
 
/* 利用變數儲存字串資料 */
var username;
var message;

username = 'Molly';
message = 'See our upcoming range';

var elName = document.getElementById('name');
elName = textContent = username;
var elNote = document.getElementById('note');
elNote = textContent = message; 

/* 於字串中使用引號 */
var title;
var message;

title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25 off!</a>';

var elTitle = document.getElementById('title');
elTitle.innerHTML = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;

/* 利用變數來儲存布林資料 */
var intock;
var shipping;
intock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = intock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;

/* 陣列 */
var colors;
colors = ['white', 'black', 'custom'];

colors[2]; // 變數中第三個項目

var el = document.getElementById('color');
el.textContent = colors[0];         //項目
//el.textContent = colors.length;   //數量

var colors = new Array('white',
                       'black',
                       'custom');

var el = document.getElementById('color');
el.innerHTML = colors.item(0);  

/* 算術運算子 */ 
var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1); 

/* 邏輯運算子 */
buy = (5 > 3 ) && (2 < 4);

/* 字串運算子 */
greeting = 'hi ' + 'Molly';