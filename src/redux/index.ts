import { createStore } from "redux";
import { IStore } from "./interface.store";
import reducer from "./reducer";

const intialStatePlayer: IStore = {
    isPlay: false,
    isAutoPlay: false,
    nowPlay: 0,
    currentTimeLine: 0,
    currentTime: 0,
}
  
const store = createStore(reducer, intialStatePlayer);

export default store;