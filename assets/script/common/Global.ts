export class Global extends cc.EventTarget {
    public static readonly Instance:Global = new Global();

    private constructor() {
        super();
    }
}

export const GlobalEvent = Global.Instance;