/**
 *  The function determines whether the format is valid
 * 
 * @function
 * @method
 * 
 * @param {string} format File format. Examples: ".mp3", .ogg
 * 
 * @returns {boolean} Return true if format is valid else false
 * 
 */
export default (format: string): boolean => {
    if (
        format === ".mp3" || 
        format === ".ogg" || 
        format === ".ape" || 
        format === ".flac" || 
        format === ".wav"
    ) {
        return true;
    } else {
        return false;
    }
}