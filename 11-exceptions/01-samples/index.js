// console.log(a);

try {
  // var emp = undefined;
  // console.log(emp.name);
} catch (err) {
  console.error("错误已处理");
} finally {
  console.log("总会执行");
}

console.log("这行会执行");

// throw
console.clear();

class ApiError extends Error {
  constructor(url, ...params) {
    super(...params);
    this.url = url;
    this.name = "ApiError";
  }
}

function fetchData() {
  console.log("获取数据....");
  // console.log(a);
  throw new ApiError("/post", "404");
}

try {
  fetchData();
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log("程序异常...");
  } else if (e instanceof ApiError) {
    console.log("API 异常");
  }
}
