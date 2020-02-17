var x = 5;

function add(a) {
  var y = 10;
  console.log("y=" + y);
  return a + x;
}

console.log(add(8));

x = 20;

console.log(add(8));

// console.log(y);

var num = 100;

function multiply(num) {
  return num * 10;
}

console.log(multiply(4));

// var/let
console.clear();

var z = 6;
if (z > 2) {
  console.log(z);
  var innerZ = 17;
}

console.log(innerZ);

for (var i = 0; i < 10; i++) {
  console.log(i);
  // let innerI = 33;
}

console.log(i);
// console.log(innerI);

// 箭头函数
console.clear();

var greeting = (name, weather) => {
  console.log("hello " + name + " 今天是： " + weather);
};

greeting("峰华", "晴天");

var increment = x => x + 1;
console.log(increment(6));

// 闭包
console.clear();

function squareSum(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}

console.log(squareSum(2, 3));

function person() {
  let name = "峰华";
  function getName() {
    return name;
  }

  return getName;
}

var getName = person();
console.log(getName);
console.log(getName());

// 柯里化
console.clear();

function addThreeNums(a, b, c) {
  return a + b + c;
}

console.log(addThreeNums(1, 2, 3));

function addThreeNumsCurry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(addThreeNumsCurry(1)(2)(3));

var fixedTwo = addThreeNumsCurry(1)(2);
console.log(fixedTwo(4));
console.log(fixedTwo(5));
console.log(fixedTwo(6));

// 自执行函数
console.clear();

var num1 = 10;

(function() {
  var num1 = 20;
  console.log(num1);
})();

console.log(num1);

// 回调函数
console.clear();

function request(cb) {
  console.log("请求数据");
  cb("success");
  console.log("请求结束");
}

// function callback(result) {
//   console.log("执行回调");
//   console.log("执行结果是： " + result);
// }

request(result => {
  console.log("执行回调");
  console.log("执行结果是： " + result);
});
