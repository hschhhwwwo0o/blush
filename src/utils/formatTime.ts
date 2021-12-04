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
   * 
   */
  let minutes: number = time / 60;

  /**
   * Initial seconds variable
   * 
   */
  let secs: number = time % 60;

  /**
   * Initial string formated seconds
   * 
   */
  let formatSeconds: string;

  /**
   * Initial string formated minutes
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

    /**
     * Else, we create a regular string from the number 
     * 
     */
    formatSeconds = secs.toFixed().toString();
  }
    
  /**
   * If seconds === 60 {
   *   Add minute;
   *   Reset Seconds;
   * }
   * 
   */
  if(formatSeconds == "60") {
    minutes++;
    return `${minutes.toString().split(".")[0]}:00`;
  }

  return `${formatMinutes}:${formatSeconds}`;
}

export default formatTime;