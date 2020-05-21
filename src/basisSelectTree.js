/* java script */
//選取一個標籤元件節點
document.getElementById();
document.querySelector();

//選取多個標籤元件節點
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelectorAll();

document.getElementById().innerHTML;
document.getElementsByClassName.textContent;

//巡訪標籤元件節點
var start = document.getElementById();
var prev = start.previousSibling;
var next = start.nextSibling;

//變更文字節點
document.getElementById().firstChild.nodeValue.replace('pine nuts', 'kale');

//Change 
prev.className = 'complete';
next.className = 'cool';

var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;
//code..
firstItem.textContent = 'sourdough bread';

//移除文件
document.getElementById('one').parentNode.removeChild('xxx');

//Form的應用
var p1=document.getElementsByName("form1")[0].page;
document.getElementsByName("form1")[0].target='_self';
document.getElementsByName("form1")[0].action='';
document.getElementsByName("form1")[0].submit();

function processFormData() {
    var name_element = document.getElementById('name');
    var name = name_element.value;
    var email_element = document.getElementById('email');
    var email = email_element.value;
    alert('你的姓名是'+name+'\n電子郵件是'+email);
}

/* jQuery, #id & .class */
$("#getId").click(function(){
    alert('ok');
});