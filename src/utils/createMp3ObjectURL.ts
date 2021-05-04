import { readFileSync } from "fs";

function createMp3ObjectURL(URI: string): string {
    const buffer = readFileSync(URI);
    const blob: Blob = new Blob([buffer], { type: "audio/mp3" });

    return window.URL.createObjectURL(blob);
};

export default createMp3ObjectURL;