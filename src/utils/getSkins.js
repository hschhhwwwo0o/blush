import fetch from "node-fetch";

/**
 * 
 * Async function return skins from json.bin database
 * 
 * @async
 * @function getSkins
 * @method
 * 
 * @returns {Promise} Skins data
 * 
 */

export default async function getSkins() {
    const res = await fetch("https://api.jsonbin.io/b/60a0b5841ad3151d4b30d6a9/13");
    const skins = await res.json();

    return skins;
};