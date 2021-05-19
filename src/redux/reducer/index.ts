import { IStore } from "../interface.store";
import { IAction } from "../actions/type";
import { 
    PLAY,
    PAUSE,
    NEXT,
    PREV,
    TIMELINE_PLAY,
    TIMELINE_PAUSE,
    CHANGE_TIMELINE,
    CHANGE_TRACK
} from "../actions";

function PlayerReducer(state: IStore, action: IAction): IStore {
    switch (action.type) {
        case PLAY:
            return {
                isPlay: true,
                nowPlay: state.nowPlay,
                isAutoPlay: true,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case PAUSE:
            return {
                isPlay: false,
                nowPlay: state.nowPlay,
                isAutoPlay: true,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case NEXT:
            return {
                isPlay: true,
                nowPlay: state.nowPlay + 1,
                isAutoPlay: true,
                currentTimeLine: 0,
                currentTime: 0,
            }

        case PREV:
            return {
                isPlay: true,
                nowPlay: state.nowPlay - 1,
                isAutoPlay: true,
                currentTimeLine: 0,
                currentTime: 0,
            }

        case TIMELINE_PLAY:
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: state.currentTimeLine + 1,
                currentTime: state.currentTime + 1,
            }

        case TIMELINE_PAUSE:
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case CHANGE_TIMELINE:
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: action.currentTimeLine,
                currentTime: action.currentTimeLine,
            }

        case CHANGE_TRACK:
            return {
                isPlay: true,
                nowPlay: action.nowPlay,
                isAutoPlay: true,
                currentTimeLine: 0,
                currentTime: 0,
            }

        default:
            return state
    }
}

export default PlayerReducer;