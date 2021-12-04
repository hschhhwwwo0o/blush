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

  /**
   * Fetch data from api
   * 
   * @type {Response}
   */
  const res = await fetch("https://api.jsonbin.io/b/60a0b5841ad3151d4b30d6a9/13");

  /**
   * Converting data to JSON format
   * 
   * Promise
   * 
   * @type {Array}
   * 
   */
  const skins = await res.json();

  return skins;
};