/** @flow */
/*jslint white fart*/
import postcss from "postcss";
import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";

// Preconfigured PostCSS processor
const pcssproc = postcss([presetEnv, cssnano]);

/**
 * Minify CSS file content.
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
function minifyCSS(content/* : string */)/* : Promise<string> */ {
    return pcssproc.process(content).async().then(({ css }) => css);
}

export default Object.freeze(minifyCSS) /*:: as typeof(minifyCSS) */;