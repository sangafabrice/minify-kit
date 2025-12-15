/** @flow */
import minifyHTML from "./minify/html/index.js";
import minifyCSS from "./minify/css.js";
import minifySVG from "./minify/svg.js";
import minifyJS from "./minify/js.js";

/**
 * Minify file content based on its extension.
 * @alias minify
 * @param extname - The file extension.
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
export default async function(extname: Extension, content: string): Promise<string> {
    switch (extname) {
        case ".css": return minifyCSS(content);
        case ".svg": return minifySVG(content);
        case ".html": return minifyHTML(content);
        case ".js": return minifyJS(content);
    }
    return content; // Default: no minification
}