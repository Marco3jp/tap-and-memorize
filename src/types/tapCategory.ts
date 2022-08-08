import {TapSelection} from "./tapSelection";
import {TapInputText} from "./tapInputText";

export type TapCategory = {
    uuid: string
    title: string
    // これだと順序を表現できない
    selections: Array<TapSelection>
    texts: Array<TapInputText>
}