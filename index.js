import minifyHTML from "./minify/html/index.js";
import minifyCSS from "./minify/css.js";
import minifySVG from "./minify/svg.js";
import minifyJS from "./minify/js.js";

async function minify(extname, content) {
    switch (extname) {
        case ".css": return await minifyCSS(content);
        case ".svg": return minifySVG(content);
        case ".html": return await minifyHTML(content);
        case ".js": return await minifyJS(content);
    }
    return content; // Default: no minification
}

export default Object.freeze(minify);