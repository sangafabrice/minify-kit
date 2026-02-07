const cssnano = require("cssnano");
const postcss = require("postcss");
const presetEnv = require("postcss-preset-env");

// Preconfigured PostCSS processor
const pcssproc = postcss([presetEnv, cssnano]);

function minifyCSS(content) {
    return pcssproc
        .process(content)
        .async()
        .then(({ css }) => css);
}

module.exports = Object.freeze(minifyCSS);