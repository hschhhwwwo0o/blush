export type ID = number
export type ImageURL = string
export type Color = string

export interface ITrack {
    readonly url: string
    readonly duration: number
    readonly title: string
    readonly artist: string
    readonly skin_id?: ID
    readonly album?: string
    readonly cover?: string
    readonly year?: number
} 

export interface ISkin {
    readonly __id: ID
    readonly image: string
    readonly mainColor: string
    readonly secondColor: string
    readonly thirdColor: string
    readonly autor?: string
}

export interface IPromiseSkins {
    skins: ISkin[]
}