import Mock from "mockjs";

Mock.setup({
  timeout: "200-600",
});

let configArray = [];

const files = require.context("./mock-api", false, /\.js$/);
files.keys().forEach((key) => {
  configArray = configArray.concat(files(key).default);
});

let mockConfig = configArray.reduce((pre, cur) => {
  for (const key in cur) {
    pre.push(cur[key]);
  }
  return pre;
}, []);

mockConfig.forEach((item) => {
  Mock.mock(item.url, item.type, item.response);
});

// console.log("mockConfig--->", mockConfig);
