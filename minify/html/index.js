/** @flow */
// $FlowExpectedError[cannot-resolve-module]
import { HTMLHint } from "htmlhint";
// $FlowExpectedError[cannot-resolve-module]
import { minify } from "html-minifier-terser";
import ruleset from "./htmlhint.js";

/**
 * Minify HTML file content.
 * @alias minifyHTML
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
export default function(content: string): Promise<string> {
    const hints = HTMLHint.verify(content, ruleset);
    if (hints.length) throw new Error(hints);
    return minify(content, { collapseWhitespace: true });
}