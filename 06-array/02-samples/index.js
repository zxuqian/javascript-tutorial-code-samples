// 数组 map
var arr = [1, 2, 3, 4];
var mappedArr = arr.map(ele => ele * 2);
console.log(mappedArr);
console.log(arr);

// 数组 reduce
console.clear();
var arr = [1, 2, 3, 4];
var result = arr.reduce((previous, current) => previous + current, 0);
console.log(result);

var result2 = arr.reduce((first, second) => first + second);
console.log(result2);

// 数组过滤
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var filteredArr = arr.filter(item => item > 4);

console.log(filteredArr);

// 数组测试
console.clear();
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every(item => item > 2);
console.log(result);

var resultSome = arr.some(item => item > 7);
console.log(resultSome);

// destructuring 操作符
console.clear();
var arr = [1, 2, 3];
var [a, b, c] = arr;
console.log(a, b, c);

var [d, e] = arr;
console.log(d, e);

var [, f] = arr;
console.log(f);

function multipleReturns() {
  let name = "峰华";
  let position = "前端工程师";

  return [name, position];
}

var [myName, myPosition] = multipleReturns();
console.log(myName, myPosition);

// rest 操作符
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var [a, b, ...rest] = arr;
console.log(a, b, rest);

var [a, , b, ...rest] = arr;
console.log(a, b, rest);

function variousArgs(...args) {
  console.log(args);
}

variousArgs(1, 2, 3);

// 多维数组
console.clear();
var arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = [];
  for (let j = 0; j < 4; j++) {
    arr[i][j] = i + j;
  }
}

console.log(arr);
