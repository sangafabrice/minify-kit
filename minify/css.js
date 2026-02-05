import postcss from "postcss";
import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";

// Preconfigured PostCSS processor
const pcssproc = postcss([presetEnv, cssnano]);

function minifyCSS(content) {
    return pcssproc
        .process(content)
        .async()
        .then(({ css }) => css);
}

export default Object.freeze(minifyCSS);