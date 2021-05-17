import fetch from "node-fetch";
import { ISkin } from "../types";

export default async function getSkins(): Promise<{skins: ISkin[]}> {
    const res = await fetch("https://api.jsonbin.io/b/60a0b5841ad3151d4b30d6a9/3");
    const skins = await res.json();

    return skins;
};