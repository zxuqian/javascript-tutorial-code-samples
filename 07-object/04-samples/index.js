// Spread 操作符
var post = {
  id: 1,
  title: "标题1",
  content: "这是内容"
};

console.log(post);

var postClone = { ...post };
console.log(postClone);
console.log(post === postClone);

var post2 = {
  ...post,
  author: "峰华"
};

console.log(post2);

var arr = [1, 2, 3];
var arrClone = [...arr];

console.log(arrClone);

var arr2 = [...arr, 4, 5, 6];
console.log(arr2);

function savePost(id, title, content) {
  console.log("保存了文章：", id, title, content);
}

savePost(...[2, "标题", "内容内容"]);

// destructuring & rest
console.clear();
var post = {
  id: 1,
  title: "标题1",
  content: "这是内容",
  comments: null
};

var { id, title } = post;
console.log(id, title);

var { id, title: headline } = post;
console.log(id, headline);

var { id, title, comments = "没有评论" } = post;
console.log(comments);

var [a, b = 2] = [1];
console.log(a, b);

var post2 = {
  id: 2,
  title: "标题2",
  content: "这是内容",
  comments: [
    {
      userId: 1,
      comment: "评论1"
    },
    {
      userId: 2,
      comment: "评论2"
    },
    {
      userId: 3,
      comment: "评论3"
    }
  ]
};

var {
  comments: [, { comment }]
} = post2;
console.log(comment);

function getId(idKey, obj) {
  let { [idKey]: id } = obj;
  return id;
}
console.log(getId("userId", { userId: 3 }));

var { comments, ...rest } = post2;
console.log(rest);

function savePostObj({ id, title, content, ...rest }) {
  console.log("保存了文章：", id, title, content);
  console.log(rest);
}

savePostObj({ id: 4, title: "标题4", content: "内容4", author: "峰华" });

// 值传递与引用传递
console.clear();
function byReference(arr) {
  arr[0] = 5;
}
var array = [1, 2, 3];
byReference(array);
console.log(array);

function byReferenceObj(obj) {
  obj.title = "标题标题";
}

var post = { id: 1, title: "标题" };
byReferenceObj(post);
console.log(post);

function byReferenceStr(str) {
  str = "abc";
}
var testStr = "test";
byReferenceStr(testStr);
console.log(testStr);

function byValue(num) {
  num = 10;
  console.log(num);
}

var testNum = 1;
byValue(testNum);
console.log(testNum);

// call, apply 与 bind
console.clear();
var emp = {
  id: 1,
  name: "峰华"
};

// emp.printInfo();
// emp.department.printInfo();

function printInfo(dep1, dep2, dep3) {
  console.log("员工姓名：" + this.name, dep1, dep2, dep3);
}

// printInfo();

printInfo.call(emp, "技术部", "IT事件部", "总裁办公室");
printInfo.apply(emp, ["技术部", "IT事件部", "总裁办公室"]);

console.clear();
var empPrintInfo = printInfo.bind(emp, "技术部", "IT事件部", "总裁办公室");
empPrintInfo();
