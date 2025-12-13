import minifyHTML from "./minify/html/index.js";
import minifyCSS from "./minify/css.js";
import minifySVG from "./minify/svg.js";
import minifyJS from "./minify/js.js";

/**
 * @typedef {".css" | ".html" | ".js" | ".svg"} Extension
 */

/**
 * Minify file content based on its extension.
 * @alias minify
 * @param {Extension} extname - The file extension.
 * @param {string} content - Raw file content to minify.
 * @returns {Promise<string>} A promise that resolves to the minified content
 */
export default async function(extname, content) {
    switch (extname) {
        case ".css": return minifyCSS(content);
        case ".svg": return minifySVG(content);
        case ".html": return minifyHTML(content);
        case ".js": return minifyJS(content);
    }
    return content; // Default: no minification
}