import { IPicture } from "music-metadata/lib/type";

/**
 * 
 * Function create base64 string of image
 * 
 * @function
 * @param cover Cover image metadata. Format: IPicture from "music-metadata/lib/type"
 * 
 * @returns {string} Base64 string image
 * 
 */
const createBase64String: Function = (cover: IPicture): string => {

    /**
     * @type {string} Base 64 string image
     */
    let base64String = "";

    cover.data.forEach((el: number) => {
        base64String += String.fromCharCode(el);
    });

    return `data:${cover.format};base64,${window.btoa(base64String)}`;
};

export default createBase64String;