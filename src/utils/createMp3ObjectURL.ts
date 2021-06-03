import { readFileSync } from "fs";

/**
 * 
 * Create url local
 * 
 * @param {string} URI File location. Example: "C:\Users\UserName\Downloads\Telegram.exe"
 * @param {string} format File format. Example: "mp3"
 * 
 * @returns {string} Created url file
 * 
*/

function createMp3ObjectURL(URI: string, format?: string): string {
    const buffer = readFileSync(URI);
    const blob: Blob = new Blob([buffer], { type: `audio/${format === undefined ? "mp3" : format}` });

    return window.URL.createObjectURL(blob);
};

export default createMp3ObjectURL;