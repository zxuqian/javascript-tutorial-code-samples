var str = "hello!";
console.log(str);

var str2 = new String("你好");
console.log(str2);

//转义字符
str = '他说：\t"我们出去玩吧！"';
console.log(str);

console.log("\u1010");
console.log("\u4310");

//遍历
console.clear();
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}

for (let c of str) {
  console.log(c);
}

//裁切
console.clear();
var str = "This is a long string.....";

console.log(str.slice(0, 4));
console.log(str.slice(4));
console.log(str.slice(0, -1));
console.log(str.slice(-6, -1));
console.log(str.slice(4, 1));

console.log(str.substring(0, 4));
console.log(str.substring(4));
console.log(str.substring(0, -1));
console.log(str.substring(-6, -1));
console.log(str.substring(4, 1));

// 拼接
console.clear();
var str1 = "hello ";
var str2 = "world";

console.log(str1 + str2);
console.log(str1.concat(str2));

//大小写
console.log(str1.toUpperCase());
console.log("WORLD".toLocaleLowerCase());

//去除空格
var str = "   hello    world   ";
console.log(str.trim());

// 模板字符串
console.clear();

var longStr = `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Quos aliquam laboriosam 
        nisi cupiditate eaque ratione labore, 
          odit iusto facere sequi quod at maxime 
aliquid. Expedita quas odio enim a consequuntur.`;

console.log(longStr);

var name = "峰华";
var str = `你好，${name}`;

console.log(str);

function greeting(strings, gender) {
  let genderStr = "";
  if (gender === "M") {
    genderStr = "先生";
  } else if (gender === "F") {
    genderStr = "女士";
  }
  return `${strings[0]}${genderStr}`;
}

var gender = "M";
var result = greeting`你好，峰华${gender}`;
console.log(result);
