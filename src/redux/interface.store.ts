export interface IStore {
    isPlay: boolean
    isAutoPlay: boolean
    nowPlay: number
    currentTimeLine: number
    currentTime: number
}

export interface IStoreSample {
    isPlay?: boolean
    isAutoPlay?: boolean
    nowPlay?: number
    currentTimeLine?: number
    currentTime?: number
}