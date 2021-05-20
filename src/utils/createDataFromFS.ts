import OS from "os";
import path from "path";
import { parseFile } from "music-metadata";
import { IAudioMetadata } from "music-metadata/lib/type";
import getPathsFS from "./getPathsFS";
import checkFileExtension from "./checkFileExtension";
import createBase64String from "./createBase64String";
import createMp3ObjectURL from "./createMp3ObjectURL";

function createDataFromFS(skinsLength?: number) {
    const PATHS_DIRS = new Array(
        `${OS.userInfo().homedir}/Music/test`,
    );

    const data = getPathsFS(PATHS_DIRS).map(async(URI: string) => {
        let ext = path.extname(URI);
        if(checkFileExtension(ext)) {
            const metadata: IAudioMetadata = await parseFile(URI);
            console.log(metadata)
            return {
                url:        createMp3ObjectURL(URI),
                artist:     metadata.common?.artist,
                album:      metadata.common?.album,
                cover:      metadata.common.picture !== undefined ? createBase64String(metadata.common.picture[0]) : undefined,
                duration:   metadata.format?.duration,
                title:      metadata.common?.title,
                year:       metadata.common?.year,
                skin_id:    skinsLength !== undefined ? Math.floor(Math.random() * skinsLength) : undefined
            }; 
        };
    });
    return Promise.all(data);
};

export default createDataFromFS;