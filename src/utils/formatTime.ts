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
    let minutes = time / 60;
    let secs = time % 60;
    let formatSeconds;
    let formatMinutes = minutes.toString().split(".")[0];

    if(secs.toFixed().toString().length === 1) {
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