import { IStore } from "../interface";
import { IAction } from "../actions/type";
import { 
  PLAY, PAUSE,
  NEXT, PREV,
  TIMELINE_PLAY,
  TIMELINE_PAUSE,
  CHANGE_TIMELINE,
  CHANGE_TRACK,
  SET_TRACKLIST
} from "../actions";

/**
 * 
 * Redux reducer
 * 
 * @param state Old Store
 * @param action Dispathed action
 *  
 * @returns New Store 
 * 
 */
function PlayerReducer(state: IStore, action: IAction): IStore {
    switch (action.type) {
      case PLAY:
        return {
          isPlay: true,
          nowPlay: state.nowPlay,
          isAutoPlay: true,
          currentTimeLine: state.currentTimeLine,
          currentTime: state.currentTime,
          isTracklist: state.isTracklist,
        }

      case PAUSE:
        return {
          isPlay: false,
          nowPlay: state.nowPlay,
          isAutoPlay: true,
          currentTimeLine: state.currentTimeLine,
          currentTime: state.currentTime,
          isTracklist: state.isTracklist,
        }

      case NEXT:
        return {
          isPlay: true,
          nowPlay: state.nowPlay + 1,
          isAutoPlay: true,
          currentTimeLine: 0,
          currentTime: 0,
          isTracklist: state.isTracklist,
        }

      case PREV:
        return {
          isPlay: true,
          nowPlay: state.nowPlay - 1,
          isAutoPlay: true,
          currentTimeLine: 0,
          currentTime: 0,
          isTracklist: state.isTracklist,
        }

      case TIMELINE_PLAY:
        return {
          isPlay: state.isPlay,
          nowPlay: state.nowPlay,
          isAutoPlay: state.isAutoPlay,
          currentTimeLine: state.currentTimeLine + 1,
          currentTime: state.currentTime + 1,
          isTracklist: state.isTracklist,
        }

      case TIMELINE_PAUSE:
        return {
          isPlay: state.isPlay,
          nowPlay: state.nowPlay,
          isAutoPlay: state.isAutoPlay,
          currentTimeLine: state.currentTimeLine,
          currentTime: state.currentTime,
          isTracklist: state.isTracklist,
        }

      case CHANGE_TIMELINE:
        return {
          isPlay: state.isPlay,
          nowPlay: state.nowPlay,
          isAutoPlay: state.isAutoPlay,
          currentTimeLine: action.currentTimeLine,
          currentTime: action.currentTimeLine,
          isTracklist: state.isTracklist,
        }

      case CHANGE_TRACK:
        return {
          isPlay: true,
          nowPlay: action.nowPlay,
          isAutoPlay: true,
          currentTimeLine: 0,
          currentTime: 0,
          isTracklist: state.isTracklist,
        }

      case SET_TRACKLIST:
        return {
          isPlay: state.isPlay,
          nowPlay: state.nowPlay,
          isAutoPlay: state.isAutoPlay,
          currentTimeLine: state.currentTimeLine,
          currentTime: state.currentTime,
          isTracklist: action.isTracklist,
        }

      default:
        return state
    }
}

export default PlayerReducer;