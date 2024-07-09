const { ccclass, property } = cc._decorator;

@ccclass
export default class BundleResourceList extends cc.Component {   

    @property(cc.Prefab)
    prefab_eff_boom:cc.Prefab = null;
}