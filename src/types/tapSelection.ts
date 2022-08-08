// 選択肢であると同時に選択結果でもある、というのが微妙な気がしていて、選択結果をどのような形で持つか迷っている
export type TapSelection = {
    uuid: string
    title: string
    isSelected: boolean
}