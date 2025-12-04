import minify from "../lib/index.js";

minify(
    ".js", 
   `const greeting = { normal: "Hello World!" };
    console.log(greeting.normal);`
)
.then(console.log);