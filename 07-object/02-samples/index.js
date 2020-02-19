// function Employee(name, position) {
//   this.name = name;
//   this.position = position;
// }

// var emp1 = new Employee("峰华", "前端工程师");
// console.log(emp1);

// var emp2 = new Employee("张三", "后端工程师");
// console.log(emp2);

// this
console.clear();
var emp3 = {
  name: "李四",
  position: "后端工程师",
  signIn() {
    console.log(this.name + "上班打卡");
  }
};

emp3.signIn();

emp3.goToWork = () => {
  console.log(this.name + "去上班");
  console.log(this);
};
emp3.goToWork();

function Employee(name, position) {
  this.name = name;
  this.position = position;
  this.signIn = () => {
    console.log(this.name + "去上班");
  };
}

var emp4 = new Employee("王五", "前端工程师");
emp4.signIn();

// getters 和 setters
console.clear();
var person = {
  firstName: "三",
  lastName: "张",
  get fullName() {
    return this.lastName + this.firstName;
  },
  set fullName(fullName) {
    let [lastName, firstName] = fullName.split(",");
    this.lastName = lastName;
    this.firstName = firstName;
  }
};

console.log(person.fullName);
person.fullName = "李,四";
console.log(person.fullName);
console.log(person.lastName, person.firstName);

function Employee2(name, position) {
  this.name = name;
  this.position = position;
}

var emp5 = new Employee2("赵六", "前端工程师");
Object.defineProperty(emp5, "info", {
  get: function() {
    return this.name + " " + this.position;
  },
  set: function(info) {
    let [name, position] = info.split(" ");
    this.name = name;
    this.position = position;
  }
});

console.log(emp5.info);
emp5.info = "赵七 后端工程师";
console.log(emp5.name);
console.log(emp5.position);
