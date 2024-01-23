// 制御構造
for (let i = 0; i < 5; i++) {
	console.log("Iteration " + (i + 1));
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}


// オブジェクト
const obj = {
	name: "Carrot",
	for: "Max",
	details: {
	  color: "orange",
	  size: 12,
	},
};

obj.name = "Simon";
const name1 = obj.name;

obj["name"] = "Simon";
const name2 = obj["name"];

const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");


