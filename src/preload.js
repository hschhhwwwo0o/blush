const fs = require("fs");
const { parseFile } = require("C:\\Users\\Seva0\\Documents\\blush\\node_modules\\music-metadata\\lib\\index.js");

// Create Store
window.STORE = {}
window.STORE.TRACKS = new Array();

// Storage with music
const PATHS_FILES = [
    `${require("os").userInfo().homedir}\\Music\\test`,
]

const GET_AUDIO = (PATHS_DIRS) => {

    const __GET_PATHS = () => {
        try {
            let fls = new Array();
    
            PATHS_DIRS.forEach( (path) => {
                const files = fs.readdirSync(path)
                const paths = files.map( (file) => {
                    return `${path}\\${file}`
                } )
    
                fls = [...fls, paths]
            } )
    
            return fls[0]
    
        } catch (error) {
            console.error(error)
        }
    }

    __GET_PATHS().forEach( async (path, index) => {

        // Initialize track
        const TRACK = {}

        const buffer = fs.readFileSync(path);
        const blob = new Blob([buffer], { type: "audio/mp3" });
        const url = window.URL.createObjectURL(blob);
        
        await parseFile(path)
        .then( (data) => {

            let cover = data.common.picture[0];
            let base64String = "";

            for (let i = 0; i < cover.data.length; i++) {
                base64String += String.fromCharCode(cover.data[i]);
            }

            const base64_src_img = "data:" + cover.format + ";base64," + window.btoa(base64String);

            TRACK.artist    = data.common.artist;
            TRACK.album     = data.common.album;
            TRACK.cover     = base64_src_img;
            TRACK.url       = url;
            TRACK.title     = data.common.title;
            TRACK.year      = data.common.year;

            console.log(data)
        } )
    
        // Push track
        await window.STORE.TRACKS.push(TRACK)
    } ) 
}

GET_AUDIO(PATHS_FILES);