let express = require("express");
let Mock = require("mockjs");
// let fs = require("fs");
// let path = require("path");
// //获取当前目录绝对路径，这里resolve()不传入参数
// let filePath = path.resolve();
let app = express();

app.post("/api/login", function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      "dataSource|1-9": [
        {
          "key|+1": 1,
          "mockTitle|1": ["肆无忌惮"],
          "mockContent|1": [
            "角色精湛主题略荒诞",
            "理由太短 是让人不安",
            "疑信参半 却无比期盼",
            "你的惯犯 圆满",
            "别让纠缠 显得 孤单",
          ],
          "mockAction|1": ["下载", "试听", "喜欢"],
        },
      ],
    })
  );
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.listen("8090", () => {
  console.log("Mock端口：8090");
});
