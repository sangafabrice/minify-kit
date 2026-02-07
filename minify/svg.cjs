const { optimize } = require("svgo");

function minifySVG(content) {
    return optimize(content, { multipass: true }).data;
}

module.exports = Object.freeze(minifySVG);