var visible = true;
var isEqual = false;

console.log(visible);
console.log(isEqual);

var num = 100;
var floatingNum = 12.34;
var negative = -100;

console.log(num);
console.log(floatingNum);
console.log(negative);

var str = "Hello!";
console.log(str);

var notInitialized = undefined;

console.log(notInitialized);

var emptyValue = null;
console.log(emptyValue);

console.log(typeof visible);
console.log(typeof num);
console.log(typeof floatingNum);
console.log(typeof str);
console.log(typeof notInitialized);
console.log(typeof emptyValue);

var age = 15;
console.log(typeof age);

age = "15";
console.log(typeof age);

var result = num + str;
console.log(result);

var strNum = "123";
console.log(parseInt(strNum) + num);

// 姓名
var myName = "峰华";

/*
 下方的代码是为了完成以下操作：
  1. 获取表单的值
  2. 提交表单
*/

/**
 * 对两个操作数进行加法运算
 * @param {number} a 第一个操作数
 * @param {number} b 第二个操作数
 * @returns 返回两个操作数的和
 */
function add(a, b) {
  return a + b;
}

add(1, 2);
