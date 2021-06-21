import OS from "os";
import path from "path";
import { parseFile } from "music-metadata";
import { IAudioMetadata } from "music-metadata/lib/type";
import InitializeDirectories from "./InitializeDirectories";
import getPathsFS from "./getPathsFS";
import checkFileExtension from "./checkFileExtension";
import createMp3ObjectURL from "./createMp3ObjectURL";
import { ITrack } from "../types";

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
function createDataFromFS(skinsLength?: number): Promise<ITrack[]> {

    /**
     * Array paths to dirs with music 
     * @type {Array<string>}
     * 
     */
    const dirs: string[] = InitializeDirectories([
        `${OS.userInfo().homedir}/Music/test`,
        `${OS.userInfo().homedir}/Music`,
        `${OS.userInfo().homedir}/Music/testy`,
    ]);

    /**
     * First load skin ID
     * @type {number} Initial Skin ID
     * 
     */
    let initialSkin: number = Math.floor(Math.random() * skinsLength);

    /**
     * Finally Array of promises
     * Initialize data
     * 
     * @type {Array<Promise>}
     * 
     */
    const data = getPathsFS(dirs).map(async(URI: string) => {

        /**
         * String extname
         * 
         * @type {string} Extname
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
             * @type {IAudioMetadata}
             * 
             * Path to interface: "node_modules/music-metadata/lib/type"
             * 
             * More about npm package: https://www.npmjs.com/package/music-metadata
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
    
    /**
     * We are waiting for the fulfillment of all promises
     * 
     * Read more: 
     * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
     * https://learn.javascript.ru/promise-api
     * 
     */
    return Promise.all(data);
};

export default createDataFromFS;