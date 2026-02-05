/** @flow */
/*jslint white fart*/
import { minify } from "terser";

/**
 * Minify JS file content.
 * @param content - Raw file content to minify.
 * @returns A promise that resolves to the minified content
 */
function minifyJS(content/* : string */)/* : Promise<string> */ {
    return minify(content, { module: true }).then(({ code = "" }) => code);
}

export default Object.freeze(minifyJS) /*:: as typeof(minifyJS) */;