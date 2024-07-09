import DataModule from './DataModule';

export default class PlayerModule extends DataModule {
    parseData(data: any): void {
        super.parseData(data);
    }

    login(cb: Function): void {
        cb && cb();
    }
}
export const playerModule = new PlayerModule();

