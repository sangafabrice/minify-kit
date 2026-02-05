import { optimize } from "svgo";

function minifySVG(content) {
    return optimize(content, { multipass: true }).data;
}

export default Object.freeze(minifySVG);