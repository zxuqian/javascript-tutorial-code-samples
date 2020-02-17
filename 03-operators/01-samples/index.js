// 赋值
var x = 10;
var y = x;

console.log(x, y);

// 一元操作符
console.clear();
var negativeNum = -5;
console.log(negativeNum);

var strNum = +"3";
console.log(strNum, typeof strNum);

var num = 8;
console.log(num++);
console.log(num);

console.log(++num);
console.log(num);

console.log(num--);
console.log(num);

console.log(--num);

// 算术操作符
console.clear();
console.log("1+5=", 1 + 5);
console.log("5-1=", 5 - 1);
console.log("3*9=", 3 * 9);
console.log("7/2=", 7 / 2);
console.log("7 % 2=", 7 % 2);
console.log("4 ** 2 =", 4 ** 2);

// 比较操作符
console.clear();
console.log("1>5", 1 > 5);
console.log("1>=5", 1 > 5);
console.log("5>=5", 5 >= 5);

console.log("5==5", 5 == 5);
console.log('5 == "5"', 5 == "5");
console.log('5 === "5"', 5 === "5");
console.log("5===5", 5 === 5);

console.log("undefined == null", undefined == null);
console.log("undefiend === null", undefined === null);

// 逻辑操作符
console.clear();

console.log("true && true", true && true);
console.log("true && false", true && false);

console.log("true || false", true || false);

console.log("!true", !true);

console.log('true && "hello"', true && "hello");
console.log('false || "default"', false || "default");

console.log('false && "not printed"', false && "not printed");
console.log('true || "not printed"', 4 + 1 || "not printed");

console.log(!!4);

// 位运算符
console.clear();

// 5 101
// 3 011

console.log("5 & 3", 5 & 3);
console.log("5 | 3", 5 | 3);
console.log("5 ^ 3", 5 ^ 3);
console.log("~5", ~5);
console.log("~3", ~3);

console.log("5 << 1", 5 << 1);
console.log("5 >> 1", 5 >> 1);
console.log("-5 >>> 1", -5 >>> 1);

// 三目运算符
console.clear();

var temperature = 16;
console.log(temperature > 15 ? "出门" : "在家");
