const http = require("http");
const fs = require("fs");
let todoData = fs.readFileSync("todoData.json", { encoding: "utf-8" });
todoData = JSON.parse(todoData)

// console.log(todoData);

const server = http.createServer((req, res) => {
//   console.log("server works");
  const url = req.url;
  let content;
  if (url == "/") {
    content = fs.readFileSync("index.html");
  } else if (url == "/myList") {
    content = fs.readFileSync("../Task-1/index.html");
  } else if (url == "/script.js") {
    content = fs.readFileSync("../Task-1/script.js");
  } else if (url == "/style.css") {
    content = fs.readFileSync("../Task-1/style.css");
  } else if (url == "/todos") {
    content = JSON.stringify(todoData, null, 3);
  } else {
    content = fs.readFileSync("notFound.html");
  }
  
  res.end(content);
});

server.listen(7000, () => {
//   console.log("it is ready");
});
