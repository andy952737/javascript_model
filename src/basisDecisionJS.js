if (score > 50){
    document.write('You passed!');
} else {
    document.write('Try again...');
}

// 兩個比較運算式, 中間 > 是邏輯運算子(&& AND || OR ! not)
var comparison = (scorel + score2) > (hightScore1 + hightScore2);

//switch 條件判斷句
switch (key) {
    case value:
        
        break;

    default:
        break;
}

// 迴圈 初始化 , 條件 , 更新 
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

// ex. 用迴圈計算分數
var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;
for (i = 0; i < arrayLength; i++) {
    roundNumber = (i + 1);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br />';
}
document.getElementById('answer').innerHTML = msg;

var i = 1;
var msg = '';
while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
    i++;
}
document.getElementById('answer').innerHTML = msg;

var i = 1;
var msg = '';
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
} while (i < 1);
document.getElementById('answer').innerHTML = msg;