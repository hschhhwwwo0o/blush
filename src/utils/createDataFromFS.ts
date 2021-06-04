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
 * @function createDataFromFS
 * @method
 * 
 * @param {number} skinsLength Length fetched skins
 * 
 * @returns {Promise} Promise with data
 * 
 */
function createDataFromFS(skinsLength?: number) {

    /**
     * String Array
     * Array paths to dirs with music 
     * 
     */
    const dirs: string[] = InitializeDirectories([
        `${OS.userInfo().homedir}/Music/test`,
        `${OS.userInfo().homedir}/Music/testy`,
    ]);

    /**
     * First load skin ID
     * @type {number} Initial Skin ID
     * 
     */
    let initialSkin: number = Math.floor(Math.random() * skinsLength);

    const data = getPathsFS(dirs).map(async(URI: string) => {

        /**
         * String extname
         * 
         * @example ".mp3", ".ogg"
         * 
         */
        let ext: string = path.extname(URI);

        /**
         * If extname is audio format.
         * 
         * Else return undefined
         * 
         */
        if(checkFileExtension(ext)) {

            /**
             * Metadata audio
             * 
             */
            const metadata: IAudioMetadata = await parseFile(URI);

            /**
             * Check initialSkin overflow
             * 
             */
            initialSkin < skinsLength - 2 ? initialSkin++ : initialSkin = 0;

            /**
             * Return metadata
             * 
             */
            return {
                url:        createMp3ObjectURL(URI),
                artist:     metadata.common?.artist,
                duration:   metadata.format?.duration,
                title:      metadata.common?.title,
                skin_id:    initialSkin,
            };
        };
    });
    
    return Promise.all(data);
};

export default createDataFromFS;