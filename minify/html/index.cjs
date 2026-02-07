const htmlhint = require("htmlhint");
const { minify } = require("html-minifier-terser");
const ruleset = require("./htmlhint.json");

function minifyHTML(content) {
    const hints = htmlhint.HTMLHint.verify(
        content,
        ruleset
    );
    if (hints.length) {
        throw new Error(hints);
    }
    return minify(content, { collapseWhitespace: true });
}

module.exports = Object.freeze(minifyHTML);