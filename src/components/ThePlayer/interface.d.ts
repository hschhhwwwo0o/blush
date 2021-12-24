import { ITrack } from "../../types";

export interface IThePlayer {
  duration: number;
  audio: string;
  lengthData?: number;
  mainColor?: string;
  secondColor?: string;
  thirdColor?: string;
  data?: ITrack[];
}
