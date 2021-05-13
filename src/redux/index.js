import { createStore } from "redux";
import reducer from "./reducer";

const intialStatePlayer = {
    isPlay: false,
    isAutoPlay: false,
    nowPlay: 0,
    currentTimeLine: 0,
    currentTime: 0,
}
  
const store = createStore(reducer, intialStatePlayer);

export default store;