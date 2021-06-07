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

    /**
     * File buffer
     * 
     */
    const buffer: Buffer = readFileSync(URI);

    /**
     * Create Blob data from buffer
     * 
     */
    const blob: Blob = new Blob([buffer], { type: `audio/${format === undefined ? "mp3" : format}` });

    /**
     * Return url local
     * 
     */
    return window.URL.createObjectURL(blob);
};

export default createMp3ObjectURL;