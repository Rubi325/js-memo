// 各データ型
// 数値型 (Number)
let numberExample = 42;

// 文字列型 (String)
let stringExample = "Hello, World!";

// 真偽値型 (Boolean)
let booleanExample = true;

// 配列型 (Array)
let arrayExample = [1, 2, 3, 4, 5];

// オブジェクト型 (Object)
let objectExample = {
    key1: "value1",
    key2: "value2",
    key3: 42
};

// 関数型 (Function)
function functionExample(param) {
    return "Hello, " + param + "!";
}

// undefined型
let undefinedExample;

// null型
let nullExample = null;

// シンボル型 (Symbol)
let symbolExample = Symbol("unique");

// 日付型 (Date)
let dateExample = new Date();

// 正規表現型 (RegExp)
let regexExample = /pattern/;

// マップ型 (Map)
let mapExample = new Map();
mapExample.set("key1", "value1");
mapExample.set("key2", "value2");

// セット型 (Set)
let setExample = new Set([1, 2, 3, 4, 5]);

// タイプを表示する関数
function displayType(value) {
    return typeof value;
}

// 各変数の型をコンソールに表示
console.log("numberExample:", displayType(numberExample));
console.log("stringExample:", displayType(stringExample));
console.log("booleanExample:", displayType(booleanExample));
console.log("arrayExample:", displayType(arrayExample));
console.log("objectExample:", displayType(objectExample));
console.log("functionExample:", displayType(functionExample));
console.log("undefinedExample:", displayType(undefinedExample));
console.log("nullExample:", displayType(nullExample));
console.log("symbolExample:", displayType(symbolExample));
console.log("dateExample:", displayType(dateExample));
console.log("regexExample:", displayType(regexExample));
console.log("mapExample:", displayType(mapExample));
console.log("setExample:", displayType(setExample));


// 変数宣言
// varは関数スコープ
function exampleVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // 10 (関数スコープ内で有効)
}
exampleVar();


// letはブロックスコープ
function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); // 20 (ブロックスコープ内で有効)
    }
    // console.log(y); // エラー: y is not defined
}
exampleLet();

// constは再代入不可（参照型の場合、中身変更可能）
const PI = 3.14;
const person = {
    name: "John",
    age: 30
};
console.log(person)
person.age = 31; // OK (オブジェクトのプロパティの変更は可能)
console.log(person)


//　文法（if, while, for）
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar */
let number = 15;
if (number > 10) {
    console.log("The number is greater than 10.");
} else if (number === 10) {
    console.log("The number is equal to 10.");
} else {
    console.log("The number is less than 10.");
}

let counter = 0;
while (counter < 5) {
    console.log("Counter: " + counter);
    counter++;
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}


// 配列
// 配列の作成
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// 配列の要素へのアクセス
console.log(fruits[0]); // "Apple"
console.log(fruits[2]); // "Orange"


// 配列の末尾に要素を追加
fruits.push("Grapes");
// 配列の先頭に要素を追加
fruits.unshift("Strawberry");
console.log(fruits);


// 配列の末尾の要素を削除
fruits.pop();
// 配列の先頭の要素を削除
fruits.shift();
console.log(fruits);


// for文を使用した反復処理
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// forEachメソッドを使用した反復処理
fruits.forEach(function(fruit) {
    console.log(fruit);
});


// 特定の条件を満たす要素のみを抽出 (フィルタリング)
let filteredFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(filteredFruits);


// 各要素に対して処理を適用し、新しい配列を生成 (マッピング)
let mappedFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(mappedFruits);

