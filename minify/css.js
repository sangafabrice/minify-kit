import postcss from "postcss";
import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";

// Preconfigured PostCSS processor
const pcssproc = postcss([presetEnv, cssnano]);

/**
 * Minify CSS file content.
 * @alias minifyCSS
 * @param {string} content - Raw file content to minify.
 * @returns {Promise<string>} A promise that resolves to the minified content
 */
export default function(content) {
    return pcssproc.process(content).async().then(({ css }) => css);
}