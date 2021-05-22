import fetch from "node-fetch";

export default async function getSkins() {
    const res = await fetch("https://api.jsonbin.io/b/60a0b5841ad3151d4b30d6a9/10");
    const skins = await res.json();

    return skins;
};