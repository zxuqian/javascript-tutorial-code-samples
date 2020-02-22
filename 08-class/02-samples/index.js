class Employee {
  dept = "";
  constructor(name) {
    this.name = "员工姓名: " + name;
  }
}

var emp = new Employee("峰华");
console.log(emp);
emp.dept = "技术部";
console.log(emp);

class Page {
  static count = 0;
  static increaseViewCount() {
    Page.count++;
  }
}

Page.count++;

console.log(Page.count);
Page.increaseViewCount();
console.log(Page.count);
