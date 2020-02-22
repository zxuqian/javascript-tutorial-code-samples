class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  signIn() {
    console.log(this.name + "打卡上班");
  }

  get info() {
    return this.name + " " + this.position;
  }

  set info(info) {
    let [name, position] = info.split(" ");
    this.name = name;
    this.position = position;
  }
}

var emp = new Employee("峰华", "前端工程师");
console.log(emp);
emp.signIn();
console.log(emp.position);

console.log(emp.info);
emp.info = "李四 后端";
console.log(emp.info);
console.log(emp.name, emp.position);

class Manager extends Employee {
  constructor(name, position, dept) {
    super(name, position);
    this.dept = dept;
  }

  signIn() {
    super.signIn();
    console.log("额外信息：经理打卡");
  }
}

var manager = new Manager("王五", "经理", "技术部");
console.log(manager);
manager.signIn();

// manager.dept = "技术部";
// console.log(manager);
