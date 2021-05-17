import { readFileSync } from "fs";

function createMp3ObjectURL(URI: string, format?: string): string {
    const buffer = readFileSync(URI);
    const blob: Blob = new Blob([buffer], { type: `audio/${format === undefined ? "mp3" : format}` });

    return window.URL.createObjectURL(blob);
};

export default createMp3ObjectURL;