import htmlhint from "htmlhint";
import { minify } from "html-minifier-terser";
import ruleset from "./htmlhint.js";

function minifyHTML(content) {
    const hints = htmlhint.HTMLHint.verify(
        content,
        ruleset
    );
    if (hints.length) {
        throw new Error(hints);
    }
    return minify(content, { collapseWhitespace: true });
}

export default Object.freeze(minifyHTML);