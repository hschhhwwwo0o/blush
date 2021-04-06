const fs = require("fs");

const __HOME_DIR = require("os").userInfo().homedir;

window.STORE = {};

const PATHS_FILES = [
    `${__HOME_DIR}\\Music\\test`,
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
    
            return fls
    
        } catch (error) {
            console.error(error)
        }
    }

    STORE.TRACKS = __GET_PATHS()[0]

}

GET_AUDIO(PATHS_FILES);