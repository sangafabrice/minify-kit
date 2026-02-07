const minifyCSS = require("./minify/css.cjs");
const minifyHTML = require("./minify/html/index.cjs");
const minifyJS = require("./minify/js.cjs");
const minifySVG = require("./minify/svg.cjs");

async function minify(extname, content) {
    switch (extname) {
        case ".css":
            return await minifyCSS(content);
        case ".svg":
            return minifySVG(content);
        case ".html":
            return await minifyHTML(content);
        case ".js":
            return await minifyJS(content);
    }
    return content; // Default: no minification
}

module.exports = Object.freeze(minify);