const path = require("path");

const fs = require("fs");
let textIn = "";
let textout = "";
const dirpath = __dirname;
for (let i = 1; i <= 10; i++) {
  textIn = fs.readFileSync(`${dirpath}/${i}.txt`, "utf-8");
  const arr = textIn.split("\r\n");
  let n = 0;

  i > arr.length + 1 ? (n = arr.length + 1) : (n = i);

  for (let k = 0; k < n; k++) {
    textout += arr[k] + "\r";
  }
}

fs.writeFileSync(`${dirpath}/output.txt`, textout);
