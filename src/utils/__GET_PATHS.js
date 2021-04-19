import { readdirSync } from "fs";

const __GET_PATHS = (PATHS_DIRS) => {
    try {
        let fls = new Array();

        PATHS_DIRS.forEach( (path) => {

            const files = readdirSync(path);

            const paths = files.map( (file) => {
                return `${path}\\${file}`
            } )

            fls = [...fls, paths];
        } )

        return fls[0];

    } catch (error) {
        console.error(error);
    }
}

export default __GET_PATHS;