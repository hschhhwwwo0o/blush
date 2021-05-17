import { IPicture } from "music-metadata/lib/type";

const createBase64String = (cover: IPicture): string => {

    let base64String = "";

    cover.data.forEach((el: number) => {
        base64String += String.fromCharCode(el);
    });

    return `data:${cover.format};base64,${window.btoa(base64String)}`;
};

export default createBase64String;