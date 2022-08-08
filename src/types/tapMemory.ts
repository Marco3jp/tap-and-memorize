import {Timestamp} from "./timestamp";

export type TapMemory = {
    uuid: string
    createdAt: Timestamp
    // 記録をcategoryに持つかどうか、みたいなところが決まってない
}