

export class EventOnSwitchScene extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventOnSwitchScene";
    public constructor() {
        super(EventOnSwitchScene.NAME, true);
    }
}

export class EventOnDataChange extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventOnDataChange";
    public obj: { model: string, key: string, value: any };
    public constructor(obj: { model: string, key: string, value: any }) {
        super(EventOnDataChange.NAME, true);
        this.obj = obj;
    }
}
export class EventBallClick extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventBallClick";
    public id: number;
    public rId: string;
    public constructor(id: number, rId: string) {
        super(EventBallClick.NAME, true);
        this.id = id;
        this.rId = rId;
    }
}
export class EventChangeTop extends cc.Event.EventCustom {
    public static readonly NAME: string = "EventChangeTop";
    public mtype: number;
    public num: number;
    public constructor(mtype: number, num: number) {
        super(EventChangeTop.NAME, true);
        this.mtype = mtype;
        this.num = num;
    }
}
