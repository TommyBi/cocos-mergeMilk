
import * as i18n from './LanguageData';

// import { _decorator, Component, Label, Font, RichText } from 'cc';
const {ccclass, property,executeInEditMode} = cc._decorator;
// const { ccclass, property, executeInEditMode } = _decorator;

@ccclass("LocalizedFontItem")
class LocalizedFontItem {
    @property(cc.String)
    language: string = 'zh';

    @property(cc.Font)
    font: cc.Font | null = null;
}

@ccclass
@executeInEditMode
export class LocalizedLabel extends cc.Component {
    label: cc.Label | cc.RichText = null;

    @property({ visible: true })
    isRickText: boolean = false;

    @property({ visible: false })
    key: string = '';

    @property({ displayName: 'Key', visible: true })
    get _key() {
        return this.key;
    }
    set _key(str: string) {
        this.updateLabel();
        this.key = str;
    }

    @property({type: LocalizedFontItem,serializable:false})
    fontList:LocalizedFontItem[] = [];

    // 多语言参数
    public param:Array<any> = null;
    onLoad() {
        if (!i18n.ready) {
            i18n.init('zh');
        }
        this.fetchRender();
    }

    fetchRender () {
        let label = null;
        if (this.isRickText) {
            label = this.getComponent(cc.RichText);
        } else {
            label = this.getComponent(cc.Label);
        }
        
        if (label) {
            this.label = label;
            this.updateLabel();
            return;
        } 
    }

    updateLabel () {

        for (let i = 0; i < this.fontList.length; i++) 
        {
            const font = this.fontList[i];
            if (font.language === i18n._language) {
                if (this.label && font) 
                {
                    this.label.font = font.font;    
                }
                break;
            }
        }
        if (this.label) {
            if (this.key) 
            {
                this.label.string = i18n.t(this.key,this.param);
            }
        }
        // this.label && (this.label.string = i18n.t(this.key));
    }
}
