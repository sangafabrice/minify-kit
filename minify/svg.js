/** @flow */
import { optimize } from "svgo";

/**
 * Minify SVG file content.
 * @param content - Raw file content to minify.
 * @returns The minified content
 */
function minifySVG(content/* : string */)/* : string */ {
    return optimize(content, { multipass: true }).data;
}

export default Object.freeze(minifySVG) /*:: as typeof(minifySVG) */;