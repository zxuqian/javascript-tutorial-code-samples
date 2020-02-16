function putInRefrigerator() {
  console.log("打开冰箱门");
  console.log("把大象放进去");
  console.log("关上冰箱门");
}

function putAnythingInRefrigerator(something) {
  console.log("打开冰箱门");
  console.log("把" + something + "放进去");
  console.log("关上冰箱门");
}

function add(a, b) {
  return a + b;
}

function testNum(num) {
  if (num < 0) return;
  return num > 10;
}

// 调用函数
putInRefrigerator();
putAnythingInRefrigerator("兔子");
add(1, 2);
console.log(add(1, 2));

var result = add(1, 2);
console.log(result);

console.log(add(result, 5));

console.log(testNum(-5));
console.log(testNum(15));

// 函数表达式
console.log(add);

var plus = add;
var res = plus(5, 6);
console.log(res);

var multiply = function(a, b) {
  return a * b;
};

console.log(multiply(6, 2));

// 函数和变量的提升
console.clear();

x = 6;

console.log(x);

var x = 5;

console.log(divide(8, 4));

function divide(a, b) {
  return a / b;
}

// 默认参数
console.clear();

function greetings(name = "峰华") {
  console.log("你好，" + name);
}

greetings();
greetings("张三");

function greetingWithWeather(name = "峰华", weather) {
  console.log("你好，" + name + ", 今天是：" + weather);
}

greetingWithWeather(undefined, "晴天");

// 递归
console.clear();

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(100));

// 1 1 2 3 5 8 13...
function fib(num) {
  if (num <= 1) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(6));

// arguments
console.clear();
function log() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

log("abc", "bcd", "efg");
