const { minify } = require("terser");

function minifyJS(content) {
    return minify(content, { module: true }).then(
        ({ code = "" }) => code
    );
}

module.exports = Object.freeze(minifyJS);