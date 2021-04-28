import OS from "os";

import { readFileSync } from "fs";
import { parseFile } from "music-metadata";

import __GET_PATHS from "./__GET_PATHS.js";

const __HOME_DIR = OS.userInfo().homedir;

const PATHS_DIRS = [
    `${__HOME_DIR}/Music/test`,
]

function __DATA() {
    const data = __GET_PATHS(PATHS_DIRS).map( async (URI: string) => {

        const metadata = await parseFile(URI);

        const buffer = readFileSync(URI);
        const blob = new Blob([buffer], { type: "audio/mp3" });
        const url = window.URL.createObjectURL(blob);

        return {
            url:        url,
            artist:     metadata.common.artist,
            title:      metadata.common.title
        }

    } )

    return Promise.all(data)
}

export default __DATA;