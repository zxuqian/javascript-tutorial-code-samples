{
  var name = "峰华";
  console.log(name);

  let age = 15;
  console.log(age);

  const YEAR = 2020;
  console.log(YEAR);
}

console.log(name);
// console.log(age);
// console.log(YEAR);

// if...else
console.clear();
// var passcode = prompt("请输入暗号");
// if (passcode === "天王盖地虎") {
//   alert("登录成功");
// } else {
//   alert("登录失败");
// }

// if...else if...else
// var role = prompt("请输入用户权限");
// if (role === "超级管理员") {
//   alert("跳转到超级管理员页面");
// } else if (role === "管理员") {
//   alert("跳转到管理员页面");
// } else {
//   alert("跳转到用户页面");
// }

// switch...case
// var role = prompt("请输入用户权限");
// switch (role) {
//   case "超级管理员":
//     alert("超级管理员页面");
//     break;
//   case "管理员":
//     alert("管理员页面");
//     break;
//   case "特殊用户":
//     alert("跳转到特殊用户页面");
//     break;
//   case "一般用户":
//     alert("跳转到一般用户页面");
//     break;
//   default:
//     alert("跳转到其他页面");
// }

// while 循环
// var password = "";
// while (password !== "123456") {
//   password = prompt("请输入密码");
// }

// console.log("登录成功");

// do while 循环
// var x = 5;
// do {
//   // console.log(x);
//   console.log(x++);
// } while (x > 5 && x <= 10);

// for 循环
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// for (;;) {
//   console.log("true");
// }

// var j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }

// break 和 continue
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}
