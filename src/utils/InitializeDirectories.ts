import { statSync } from "fs";

function InitializeDirectories(paths: string[]): string[] | [] {
    let dirs: string | any = [];

    dirs = paths.map((path) => {
        try {
            if(statSync(path).isDirectory()){
                return path;
            }
        } catch(err) {
            return "";
        };
    });

    return dirs;
}

export default InitializeDirectories;