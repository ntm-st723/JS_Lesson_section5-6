// #Section5
// Q1 変数
let nickname ='なっちゃん';
let age = '26'
let text = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(text);


// Q2 配列
let languages = ['Javascript', 'PHP','Ruby', 'Python', 'Go'];
// console.log('languages[0] => ', languages[0]);
// console.log('languages[1] => ', languages[1]);
// console.log('languages[2] => ', languages[2]);
// console.log('languages[3] => ', languages[3]);
// console.log('languages[4] => ', languages[4]);
let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(languagesText);


// Q3 オブジェクト
// let user = {
//   name: 'John',
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };
// console.log(user.age);


// // Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
 console.log(playerList[1].favorites[1] );

// Q5 四則演算
function trio() {
  let age = 26 + 33 + 22;
  console.log(age / 3);
}

trio();

// Q6 関数
function sayHello() {
  let greet = 'Hello';
  console.log(greet);
}
sayHello();

// 変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。
function sayWorld (callback) {
  console.log('sayWorld');
  callback();
}

sayWorld(function() {
  console.log('World');
});



// Q7 メソッド
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday:'2000-09-27',
  sayHello: function() {
    console.log(' Hello！');
  }
};
user.sayHello(); 

// Q8 引数
// #add メソッド：和（足し算）が7になるように実行
let calc = {};
calc.add = function(x,y) {
  console.log(x + y);
}
calc.add(3,4);

// #subtract メソッド：差（引き算）が10になるように実行
calc.subtract = function(x,y) {
  console.log(x - y);
}
calc.subtract(11,1);

// #multiply メソッド：積（掛け算）が49 になるように実行
calc.multiply = function(x,y) {
  console.log(x * y);
}
calc.multiply(7,7);

// # divide メソッド:商（割り算）が5 になるように実行
calc.divide = function(x,y) {
  console.log(x / y);
}
calc.divide(25,5);

// Q9 返り値
function remainder(x,y) {
 console.log(x % y);
 return x % y;
}
remainder(5,3);
console.log(`5を3で割った余りは${remainder(5,3)}です`)

// Q10 スコープ:x is not defined（変数 x が定義されていない）というエラーが出力される理由
// function foo() {
//   let x = 1;
// }
// console.log(x);

// →『スコープ』は変数の有効範囲のことであり、ある関数の中で定義した変数はその関数の中からしか『参照』できません。
// 上記のコンソールでは変数xは関数fooの中で定義しているため、関数fooの外で使用しようとすると上記のようなエラーが出ます。
// 関数の外で使用したい場合には、変数の定義を関数の外で行い、関数の中では変数を再代入するようにするとコンソールに表示されるようになります。
//（例）
// let x = 0;
// foo();

// function foo() {
//   x = 1;
//   console.log(x);
// }
// console.log(x);
// =======================================================================================================================================

// #Section6
// Q1
Math.floor(Math.random() * (9 + 1));
let randomNum = Math.floor(Math.random() * (9 + 1));

console.log(randomNum);


// Q2
setTimeout(function(){console.log("Hello World!")},3000);


// Q3
let num = 1;

if (num >= 0) {
  console.log('num is greater than 0')
} else if (num <= 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4
let numbers = [];
 for (let numbers = 0; numbers < 100; numbers++) {
   console.log(numbers);
 }



// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

if (mixed[0] % 2 == 0) {
  console.log('even');
} else if  (mixed[2] % 2 == 1) {
  console.log('odd');
} else if (mixed[3]){
  console.log('not number');
}