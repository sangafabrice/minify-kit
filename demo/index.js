/** @flow */
import minify from "../src/index.js";

minify(
    ".js", 
   `const greeting = { normal: "Hello World!" };
    console.log(greeting.normal);`
)
.then(console.log);