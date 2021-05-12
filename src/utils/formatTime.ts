function formatTime(time: number): string {

    let minutes = time / 60;
    let secs = time % 60;

    let formatMinutes = minutes.toString().split(".")[0];
    let formatSecunds = secs.toFixed().toString().length === 1 ? `0${secs.toFixed().toString()}` : secs.toFixed().toString(); 

    return `${formatMinutes}:${formatSecunds}`;
}

export default formatTime;