function formatTime(time: number): string {

    let minutes = time / 60;
    let secs = time % 60;

    let formatSeconds;

    if( secs.toFixed().toString().length === 1 ) {
        formatSeconds = `0${secs.toFixed().toString()}`
    } else {
        formatSeconds = secs.toFixed().toString()
    }
    
    let formatMinutes = minutes.toString().split(".")[0];

    if( formatSeconds == "60" ) {
        minutes++;
        return `${minutes.toString().split(".")[0]}:00`
    }

    return `${formatMinutes}:${formatSeconds}`;
}

export default formatTime;