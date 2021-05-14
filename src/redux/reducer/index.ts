import { IStore } from "../interface.store";

function PlayerReducer(state: IStore, action: any): IStore {
    switch (action.type) {
        case "PLAY":
            return {
                isPlay: true,
                nowPlay: state.nowPlay,
                isAutoPlay: true,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case "PAUSE":
            return {
                isPlay: false,
                nowPlay: state.nowPlay,
                isAutoPlay: true,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case "NEXT":
            return {
                isPlay: true,
                nowPlay: state.nowPlay + 1,
                isAutoPlay: true,
                currentTimeLine: 0,
                currentTime: 0,
            }

        case "PREV":
            return {
                isPlay: true,
                nowPlay: state.nowPlay - 1,
                isAutoPlay: true,
                currentTimeLine: 0,
                currentTime: 0,
            }

        case "TIMELINE_PLAY":
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: state.currentTimeLine + 1,
                currentTime: state.currentTime + 1,
            }

        case "TIMELINE_PAUSE":
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: state.currentTimeLine,
                currentTime: state.currentTime,
            }

        case "CHANGE_TIMELINE":
            return {
                isPlay: state.isPlay,
                nowPlay: state.nowPlay,
                isAutoPlay: state.isAutoPlay,
                currentTimeLine: action.currentTimeLine,
                currentTime: action.currentTimeLine,
            }

        default:
            return state
    }
}

export default PlayerReducer;