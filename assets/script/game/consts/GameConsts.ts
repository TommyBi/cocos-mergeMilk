export enum Target_Cell_State {
    lock,
    current,
    complete,
    final//最终目标
}

export type Target_Cell = {
    state: number,
    count: number
}
export enum Slot_Cell_State {
    lock,//未解锁
    nextVideoLock,//视频解锁后
    videoLock,//视频解锁
    unlockIng,//下一级待解锁
    openIng,//可解锁
    open,//已解锁
}
export type Slot_Cell = {
    state: Slot_Cell_State,
    isTime: boolean,
    numList: Array<number>,
}