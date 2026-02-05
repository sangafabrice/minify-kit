/** @flow */
import { HTMLHint } from "htmlhint";
import { minify } from "html-minifier-terser";
import ruleset from "./htmlhint.js";

/**
 * Minify HTML file content.
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
function minifyHTML(content/* : string */)/* : Promise<string> */ {
    const hints = HTMLHint.verify(content, ruleset);
    if (hints.length) { throw new Error(hints); }
    return minify(content, { collapseWhitespace: true });
}

export default Object.freeze(minifyHTML) /*:: as typeof(minifyHTML) */;