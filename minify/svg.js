/**  */
import { optimize } from "svgo";

/**
 * Minify SVG file content.
 * @alias minifySVG
 * @param content - Raw file content to minify.
 * @returns The minified content
 */
export default function(content) {
    return optimize(content, { multipass: true }).data;
}