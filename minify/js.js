/**  */
import { minify } from "terser";

/**
 * Minify JS file content.
 * @alias minifyJS
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
export default function(content) {
    return minify(content, { module: true }).then(({ code }) => code);
}