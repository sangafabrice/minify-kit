import { minify } from "terser";

function minifyJS(content) {
    return minify(content, { module: true }).then(
        ({ code = "" }) => code
    );
}

export default Object.freeze(minifyJS);