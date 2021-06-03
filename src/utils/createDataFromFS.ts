import OS from "os";
import path from "path";
import { parseFile } from "music-metadata";
import { IAudioMetadata } from "music-metadata/lib/type";
import InitializeDirectories from "./InitializeDirectories";
import getPathsFS from "./getPathsFS";
import checkFileExtension from "./checkFileExtension";
import createMp3ObjectURL from "./createMp3ObjectURL";

/**
 * 
 * Function create music data from filesystem user
 * 
 * @param {number} skinsLength Length fetched skins 
 * 
 * @returns Promise with data
 * 
 */

function createDataFromFS(skinsLength?: number) {
    const dirs = InitializeDirectories([
        `${OS.userInfo().homedir}/Music/test`,
        `${OS.userInfo().homedir}/Music/testy`,
    ]);

    let skin = Math.floor(Math.random() * skinsLength);

    const data = getPathsFS(dirs).map(async(URI: string) => {
        let ext = path.extname(URI);
        if(checkFileExtension(ext)) {
            const metadata: IAudioMetadata = await parseFile(URI);
            skin < skinsLength - 2 ? skin++ : skin = 0;
            return {
                url:        createMp3ObjectURL(URI),
                artist:     metadata.common?.artist,
                duration:   metadata.format?.duration,
                title:      metadata.common?.title,
                skin_id:    skin
            };
        };
    });
    return Promise.all(data);
};

export default createDataFromFS;