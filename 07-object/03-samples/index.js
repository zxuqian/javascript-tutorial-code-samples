function Employee(name, position) {
  this.name = name;
  this.position = position;
  this.signIn = function() {
    console.log(this.name + "打卡");
  };
}

var emp1 = new Employee("张三", "前端工程师");
var emp2 = new Employee("李四", "后端工程师");

console.log(emp1);
console.log(emp2);

console.log(Employee.prototype);
Employee.prototype.age = 20;

console.log(emp1.age);
console.log(emp2.age);

Employee.prototype.printInfo = function() {
  console.log(this.name, this.age, this.position);
};

emp1.printInfo();
emp2.printInfo();

console.log(emp1.__proto__);
console.log(Employee.prototype);
console.log(emp1.__proto__ === Employee.prototype);
console.log(Object.getPrototypeOf(emp2));

// Object.create
console.clear();
console.log(emp1);
for (key in emp1) {
  console.log(key);
}

var manager = Object.create(emp1);
console.log(manager);
for (key in manager) {
  console.log(key);
}
console.log(manager.name);
manager.name = "李四";
manager.position = "经理";
console.log(manager);
manager.signIn();
console.log(Object.getOwnPropertyNames(manager));

// 原型链
console.clear();
var protoOfManager = Object.getPrototypeOf(manager);
console.log(protoOfManager);
var protoOfEmp1 = Object.getPrototypeOf(protoOfManager);
console.log(protoOfEmp1);
var protoOfEmp = Object.getPrototypeOf(protoOfEmp1);
console.log(protoOfEmp);
var protoOfObj = Object.getPrototypeOf(protoOfEmp);
console.log(protoOfObj);

console.log(Object.getPrototypeOf(Object.prototype));

console.log(manager.toString);
console.log(manager.toString());

// 修改原型指向
function Manager() {}

Manager.prototype.department = "技术部";

Object.setPrototypeOf(manager, Manager.prototype);

console.log(manager.department);
console.log(Object.getPrototypeOf(manager));
// console.log(manager.signIn());
for (key in manager) {
  console.log(key);
}
