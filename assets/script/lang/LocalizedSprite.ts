
import * as i18n from './LanguageData';

const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass("LocalizedSpriteItem")
class LocalizedSpriteItem 
{
    @property(cc.String)
    language: string = 'zh';
    @property(cc.SpriteFrame)
    spriteFrame: cc.SpriteFrame | null = null;

}

@ccclass
@executeInEditMode
export class LocalizedSprite extends cc.Component {
    sprite: cc.Sprite | null = null;

    @property({type: LocalizedSpriteItem,serializable:true})
    spriteList:LocalizedSpriteItem[] = [];

    onLoad() {
        if (!i18n.ready) {
            i18n.init('zh');
        }
        this.fetchRender();
    }

    fetchRender () {
        let sprite = this.getComponent('cc.Sprite') as cc.Sprite;
        if (sprite) {
            this.sprite = sprite;
            this.updateSprite();
            return;
        } 
    }

    updateSprite () {
        for (let i = 0; i < this.spriteList.length; i++) {
            const item = this.spriteList[i];
            // @ts-ignore
            if (item.language === i18n._language) {
                // @ts-ignore
                if (this.sprite && item) {
                    this.sprite.spriteFrame = item.spriteFrame;    
                }
                break;
            }
        }
    }
}
