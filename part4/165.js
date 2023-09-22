const util = require("util");

const name = "Tony";
const greeting = util.format("hello %s", name);
console.log(greeting);
