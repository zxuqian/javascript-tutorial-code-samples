// 创建对象
var employee = {
  name: "张三",
  age: 20,
  position: "前端工程师",
  signIn: function() {
    console.log("张三打卡");
  }
};

var employee2 = new Object();
employee2.name = "李四";
employee2.signIn = function() {
  console.log("李四打卡");
};

// 对象属性
console.log(employee.name);
console.log(employee["name"]);

employee.name = "张五";
console.log(employee.name);
employee["name"] = "张六";
console.log(employee.name);

console.log(employee2.age);
employee2.age = 22;
console.log(employee2.age);

var employee3 = {
  name: "王五",
  birthDate: "1990-03-02"
};

console.log(employee3.birthDate);

// 省略 key
console.clear();
var name = "李四";
var employee4 = {
  name,
  signIn() {
    console.log("李四打卡");
  }
};

console.log(employee4.name);
console.log(employee4.signIn());

// 遍历对象所有属性
console.clear();
console.log(Object.keys(employee));

for (key in employee) {
  console.log(key);
}

// 删除对象属性
delete employee.name;
console.log(employee);
console.log(Object.keys(employee));
