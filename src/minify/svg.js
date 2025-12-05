/** @flow */
import { optimize } from "svgo";

/**
 * Minify SVG file content.
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
export default function(content /*: string */) /*: string */ {
    return optimize(content, { multipass: true }).data;
}