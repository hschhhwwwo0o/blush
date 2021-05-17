export default (format: string): boolean => {
    if (
        format === "mp3" || 
        format === "ogg" || 
        format === "ape" || 
        format === "flac" || 
        format === "wav"
    ) {
        return true;
    } else {
        return false;
    }
}