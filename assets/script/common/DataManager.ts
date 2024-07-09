import PlayerInfo from "../game/data/PlayerInfo";

export default class DataManager {

	private static _ins: DataManager;
	public static get ins() {
		if (!this._ins) {
			this._ins = new DataManager();
		}
		return this._ins;
	}


	public player: PlayerInfo = new PlayerInfo();


	private constructor() {
		
	}
	/**
	 * 同步初始化数据
	 */
	async onInit() {

		this.player.init();

	}

	onLogin(data) {
	}



}
export const dm = DataManager.ins;