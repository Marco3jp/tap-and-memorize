import {TapSelection} from "./tapSelection";
import {TapInputText} from "./tapInputText";

type TapCell = TapSelection | TapInputText

type TapColumn = {
    cell: TapCell
}

type TapRow = {
    columns: Array<TapColumn>
}

type TapTargets = {
    rows: Array<TapRow>
}

// めちゃくちゃUI依存なデータ構造になっているので悩ましい
// DBに起こすならRow番号とCell番号を持つ感じになるのかな
export type TapCategory = {
    uuid: string
    title: string
    tapTargets: TapTargets
}