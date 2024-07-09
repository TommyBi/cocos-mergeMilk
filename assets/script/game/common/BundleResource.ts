const {ccclass, property} = cc._decorator;

@ccclass
export default class BundleResource extends cc.Component {
    @property(cc.SceneAsset)
    public sceneAsset: cc.SceneAsset =null
    
}
