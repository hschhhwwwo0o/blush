/**
 * 
 * Function create music formated time string
 * 
 * @param {number} time Number Time from metadata music. Example: 120. 
 * 
 * @returns {string} Example return "2:34"
 * 
 */
function formatTime(time: number): string {

    /**
     * Initial minutes variable
     * @type {number}
     * 
     */
    let minutes: number = time / 60;

    /**
     * Initial seconds variable
     * @type {number}
     * 
     */
    let secs: number = time % 60;

    /**
     * Initial string formated seconds
     * @type {string}
     * 
     */
    let formatSeconds: string;

    /**
     * Initial string formated minutes
     * @type {string}
     * 
     */
    let formatMinutes: string = minutes.toString().split(".")[0];

    /**
     * Set formated seconds
     * 
     */
    if(secs.toFixed().toString().length === 1) {
        
        /**
         * if the number is two-digit {
         *   formatSeconds = "08" // Add "0"
         * }
         * 
         */
        formatSeconds = `0${secs.toFixed().toString()}`;
    } else {
        formatSeconds = secs.toFixed().toString();
    }
    
    if(formatSeconds == "60") {
        minutes++;
        return `${minutes.toString().split(".")[0]}:00`;
    }

    return `${formatMinutes}:${formatSeconds}`;
}

export default formatTime;