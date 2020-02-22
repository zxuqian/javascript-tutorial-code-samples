var str = "where when what";

var re = /wh/g;
var re2 = new RegExp("wh");

console.log(re.exec(str));
// console.log(re.test(str));

// console.log(re2.exec(str));
// console.log(re2.test(str));

console.log(re.exec(str));
console.log(re.exec(str));
console.log(re.exec(str));

// 字符匹配
console.clear();

var str = `This str contains 123 
CAPITALIZED letters and _-&^% symbols`;

console.log(/T/.test(str));
console.log(/This/.test(str));
console.log(/Thiss/.test(str));
console.log(/12/.test(str));
console.log(/1234/.test(str));
console.log(/_-&/.test(str));

//特殊字符匹配
console.clear();
console.log(str.match(/Th.s/g));
console.log(str.match(/1.3/g));
console.log(str.match(/\d/g));
console.log(str.match(/\w/g));
console.log(str.match(/\s/g));
console.log("你好".match(/\u4f60/g));

//匹配次数
console.clear();
var str = `This str contains 123 CAPITALIZED letters and _-&^% symbols`;
console.log(str.match(/This.*/g));
console.log(str.match(/T+/g));
console.log(str.match(/t?/g));

console.log(str.match(/t{2}/g));
console.log(str.match(/\d{1,}/g));

//区间、逻辑和界定符
console.clear();
console.log(str.match(/[abc]/g));
console.log(str.match(/[^a-z]/g));
console.log(str.match(/[\-_&\^]/g));

console.log(str.match(/This|contains/g));

var str = "this athata this and that";
console.log(str.match(/^this/g));
console.log(str.match(/that$/g));

console.log(str.match(/\bthat\b/g));

// 分组
console.clear();

var str = `this that this and that`;
console.log(/(th).*(th)/.exec(str));

var str = `aaaab abb cddaa`;
console.log(str.match(/(aa){2}/g));

// 常见正则表达式
console.clear();
var mobileRe = /^1[3-9]\d{9}/g;
console.log(mobileRe.test("10818886666"));

var emailRe = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
console.log(emailRe.test("admin@163.com"));
console.log(emailRe.test("admin@163.commmm"));

var usernameRe = /^[a-zA-Z][a-zA-Z0-9_]{5,14}$/g;
console.log(usernameRe.test("abc"));
console.log(usernameRe.test("$aaa"));
console.log(usernameRe.test("abcd0_12a"));
console.log(usernameRe.test("hafhksjksdfhjksfjds"));

//字符串替换
// console.clear();
var str = "Tish 1is 2an 3apple";
console.log(str.replace(/\d+/g, ""));

var html = `<span>hello</span><div> world</div>`;
console.log(html.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, "$1"));

var tags = "html, css, javascript";
console.log(tags.split(", "));

var str = "This  | is , an  & apple";
console.log(str.split(/\W+/g));
