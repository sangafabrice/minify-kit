/** @flow */
// $FlowExpectedError[cannot-resolve-module]
import postcss from "postcss";
// $FlowExpectedError[cannot-resolve-module]
import presetEnv from "postcss-preset-env";
// $FlowExpectedError[cannot-resolve-module]
import cssnano from "cssnano";

// Preconfigured PostCSS processor
const pcssproc = postcss([presetEnv, cssnano]);

/**
 * Minify CSS file content.
 * @alias minifyCSS
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
export default function(content: string): Promise<string> {
    return pcssproc.process(content).async().then(({ css }) => css);
}