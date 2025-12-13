import { HTMLHint } from "htmlhint";
import { minify } from "html-minifier-terser";
import ruleset from "./htmlhint.json" with { type: "json" };

/**
 * Minify HTML file content.
 * @alias minifyHTML
 * @param {string} content - Raw file content to minify.
 * @returns {Promise<string>} A promise that resolves to the minified content
 */
export default function(content) {
    const hints = HTMLHint.verify(content, ruleset);
    if (hints.length) throw new Error(hints);
    return minify(content, { collapseWhitespace: true });
}