// ＃section2　変数とデータ型
alert('Hello World!');
console.log('Hello World!');
let text = 'JavaScriptの練習';
console.log(text);
text = 'JavaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// #文字列型について
console.log('elephant');

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

// #テンプレートリテラルについて
let template = 'テンプレートリテラル'; 
let templateText = `これが${template}です
${template}は改行もできます。`; 
console.log(templateText);

// #数値型について
let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);


let number = 5;
number += 3;
console.log(number);

let bigNum = 25;
let smallNum = 2;

console.log(bigNum ** smallNum); 

// #配列型について
let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);


// #オブジェクト型について(関数を持たせる（section3))
let John = {
  name: 'John', // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing:function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing(); 


// #section3　関数について
// let radius = 2;
// let circle = radius * radius * 3.14;
// console.log('円の面積は' + circle + 'です');

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}
console.log('円の面積は' + getArea(5) + 'です');

// #コールバック関数
function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

doFunc(function() {
   console.log('コールバック関数が呼び出されました');
});

// #スコープ
let userAge = 0;
myFunc();

function myFunc() {
  userAge = 27;
  console.log(userAge);
}

console.log(userAge);


// section4　制御構文について
// #if文

// #真偽値型
let value1 = true;
let value2 = false;
if (false) {
  console.log('trueです！');
}

console.log('処理が終わりました');


// #比較演算子
let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');


// #複雑な条件分岐
let signal = 'red';
if (signal === 'red') {
  console.log('赤信号です。止まりましょう');
} else if (signal === 'blue'){
  console.log('青信号です。進みましょう');
} else if (signal === 'yellow') {
  console.log('黄色信号です。空気空気を読みましょう');
}

let myAge =12;
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

// #論理演算子:「または」や「かつ」の条件式を作れる演算子
let loto = 8;

if(loto === 7 || loto === 8) {
  console.log('当たり');
} else {
  console.log('ハズレ');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');


let userA = '到着';
let userB = '到着';

if (userA === '到着'&& userB === '到着') {
  console.log('全員揃ったので出発します');
} else {
  console.log('揃っていないため、出発できません');
}


// ＃三項演算子:if文の代替として、一行で記述できる書き方
if (1) {
  console.log('hoge');
}

if (0) {
  console.log('piyo');
}


// #for文:繰り返し処理をするためのもの
for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum +=numbers[i];
}

console.log(sum);