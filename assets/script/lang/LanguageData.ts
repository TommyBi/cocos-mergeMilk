
export let _language = 'zh';

export let ready: boolean = false;

/**
 * 初始化
 * @param language 
 */
export function init(language: string) {
    ready = true;
    _language = language;
}

export function initSource(language: string,languages:any)
{
    init(language);
    const win: any = window;
    win.languages = {};
    win.languages[_language] = languages;
}

/**
 * 翻译数据
 * @param key 
 */
export function t(key: string,option?:Array<any>) {
    const win: any = window;
    
    if (!win.languages) {
        return key;
    }

    let data = win.languages[_language];
    let result = key;
    if (!data || !data[key]) 
    {
        return result;
    }

    result = data[key];

    if (option) 
    {
        const regexp = /{\d}/g;
        const matchArr = result.matchAll(regexp);
        if (matchArr) {
            // const fetchArr = [...matchArr];
            let fetchArr = [];
            for (const iterator of matchArr) 
            {
                fetchArr.push(iterator);    
            }
            // console.log(fetchArr,'+++++++++',matchArr);
            for (let index = 0; index < option.length; index++) 
            {
                const element = fetchArr[index];
                if (element) {
                    result = result.replace(element[0],option[index]);    
                }
            }
            return result
        }
        
    }
    return result;
    // const searcher = key.split('.');
    
    // let data = win.languages[_language];
    // for (let i = 0; i < searcher.length; i++) {
    //     data = data[searcher[i]];
    //     if (!data) {
    //         return '';
    //     }
    // }
    // return data || '';
}

export function updateSceneRenderers() { // very costly iterations
    
    const rootNodes = cc.director.getScene()!.children;
    // walk all nodes with localize label and update
    const allLocalizedLabels: any[] = [];
    for (let i = 0; i < rootNodes.length; ++i) {
        let labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
        Array.prototype.push.apply(allLocalizedLabels, labels);
    }
    for (let i = 0; i < allLocalizedLabels.length; ++i) {
        let label = allLocalizedLabels[i];
        // if(!label.node.active)continue;
        label.updateLabel();
    }
    // walk all nodes with localize sprite and update
    const allLocalizedSprites: any[] = [];
    for (let i = 0; i < rootNodes.length; ++i) {
        let sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
        Array.prototype.push.apply(allLocalizedSprites, sprites);
    }
    for (let i = 0; i < allLocalizedSprites.length; ++i) {
        let sprite = allLocalizedSprites[i];
        if(!sprite.node.active)continue;
        sprite.updateSprite();
    }
}
// 供插件查询当前语言使用
const win = window as any;
win.initSource = initSource;
win._languageData = {
    get language() {
        return _language;
    },
    init(lang: string) {
        init(lang);
    },
    updateSceneRenderers() {
        updateSceneRenderers();
    },
};
