import { createStore } from "redux";
import { IStore } from "./interface";
import reducer from "./reducer";

const intialStatePlayer: IStore = {
  isPlay: false,
  isAutoPlay: false,
  nowPlay: 0,
  currentTimeLine: 0,
  currentTime: 0,
  isTracklist: false,
};

/**
 * Function create store
 *
 * More about: https://redux.js.org/api/createstore
 */
export default createStore(reducer, intialStatePlayer);
