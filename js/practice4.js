// 関数
function avg(...args) {
	let sum = 0;
	for (const item of args) {
		sum += item;
	}
	return sum / args.length;
}
avg(2, 3, 4, 5);


// クラス
class Person {
	constructor(name) {
		this.name = name;
	}
	sayHello() {
		return `Hello, I'm ${this.name}!`;
	}
}
const p = new Person("Maria");
console.log(p.sayHello());


// 非同期プログラミング
/*eslint no-undef: "error"*/
/*eslint-env node*/
import fs from 'fs';
const filename = 'example';
// callback-based
fs.readFile(filename, (err, content) => {
	if (err) {
		throw err;
	}
	console.log(content);
});

// promise-based
fs.readFile(filename)
	.then((content) => {
		console.log(content);
	})
	.catch((err) => {
		throw err;
	});

// async/await
async function readFile(filename) {
	const content = await fs.promises.readFile(filename);
	console.log(content);
}
