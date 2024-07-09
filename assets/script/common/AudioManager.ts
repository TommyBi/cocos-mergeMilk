import { Logger } from "../utils/logger";

export default class AudioManager {
    public static Instance: AudioManager = new AudioManager();

    private constructor() {       
    }

    private soundLib = {

    };
    private audioIds={};

    private hasShowIOSWebMask: null

    private bgmVolume: any = null
    private sfxVolume: any = null
    private bgmAudioID: any = null

    private curBGMUrl: any = null;
    private _bgmEnabled: boolean = true;
    private _sfxEnabled: boolean = true;//!GameConfig.DEBUG;

    public set sfxEnabled(value: boolean) {
        this._sfxEnabled = value;
    }
    public get sfxEnabled(): boolean {
        return this._sfxEnabled;
    }

    public set bgmEnabled(enabled: boolean) {
        this._bgmEnabled = enabled;
    }
    public get bgmEnabled(): boolean {
        return this._bgmEnabled;
    }

    init() {
        cc.log("audio init");
        this.curBGMUrl = null;

        this.bgmVolume = 0.2;
        this.sfxVolume = 1.0;
        this.bgmAudioID = -1;

        this._bgmEnabled = true;
        this._sfxEnabled = true;



    }

    // 音乐
    public playBGM(url, force) {
        // 如果已经播放着就不播放了
        if (this.curBGMUrl && this.curBGMUrl == url && this.bgmAudioID && !force) return;

        this.curBGMUrl = url;
        if (this._bgmEnabled) {
            this.stopBGM();
            //cc.url.raw(url)
            cc.resources.load(url, function (err, clip) {
                if (this.curBGMUrl == url) {
                    cc.audioEngine.stopAll();
                    this.bgmAudioID = cc.audioEngine.play(clip, true, this.bgmVolume);
                } else {
                    console.log("播放背景音乐失败:", err)
                }
            }.bind(this));
        }
    }

    public stopBGM() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.stop(this.bgmAudioID);
            this.bgmAudioID = null;
        }
    }

    /**
     * 同步加载声音资源
     * @param url 
     */
    async preloadAudioClip(soundName: string) {
        if (!this._sfxEnabled) {
            return;
        }
        
        cc.resources.preload(`sounds/${soundName}`,cc.AudioClip)
    }

    // 音效
    public playSFX(url: string, sfxVolume: any = this.sfxVolume,ext:string = ".mp3", loop: boolean = false, isFromNet: boolean = false,onStart?:Function) {
        if (this._sfxEnabled) {
            if (this.soundLib[`${url}`]) {
                // Logger.debug("[AudioManager playSFX] ", url);
                const audioId = cc.audioEngine.play(this.soundLib[`${url}`], loop, sfxVolume);
                onStart && onStart();
            } else {
                if (isFromNet) {
                    if (!url.startsWith("https://")) {
                        onStart && onStart();
                        return;
                    }
                    cc.assetManager.loadRemote(url, { ext: ext }, (err, clip: cc.AudioClip) => {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            const audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            this.audioIds[url] = audioId;
                        } else {
                            Logger.debug(err);
                        }
                        onStart && onStart();
                    });
                } else {
                    cc.resources.load(url, ((err, clip: cc.AudioClip) => {
                        if (!err) {
                            // Logger.debug("[AudioManager playSFX] ", url);
                            const audioId = cc.audioEngine.play(clip, loop, sfxVolume);
                            this.soundLib[`${url}`] = clip;
                            this.audioIds[url] = audioId;
                        } else {
                            Logger.debug(err);
                        }
                        onStart && onStart();
                    }));
                }
            }
        }else{
            onStart && onStart();
        }
    }
    public stopSfxByUrl(url){
        let audioId = this.audioIds[url];
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    }

    public stopSFX(audioId) {
        Logger.debug("audioId", audioId)
        if (audioId != null) {
            cc.audioEngine.stop(audioId);
        }
    }

    //change
    public getSFXEnabled() {
        return this.sfxEnabled;
    }


    public getBGMEnabled() {
        return this.bgmEnabled;
    }

    // 暂停
    public pauseBGM() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.pause(this.bgmAudioID);
        }
    }

    // 恢复
    public resumeBGM() {
        if (this.bgmAudioID >= 0) {
            cc.audioEngine.resume(this.bgmAudioID);
        }
    }

    // 卸载音效
    uncache(url) {
        const audioUrl: any = cc.url.raw(url);
        cc.audioEngine.uncache(audioUrl);
        this.soundLib[`${url}`] = undefined;
    }

    uncacheAll() {
        cc.audioEngine.uncacheAll();
        this.soundLib = {};
    }

    pauseAll() {
        Logger.debug('Pause All Sound');
        cc.audioEngine.pauseAll();
    }

    resumeAll() {
        Logger.debug('Resum All Sound');
        cc.audioEngine.resumeAll();
    }

    stopAll() {
        cc.audioEngine.stopAll();
    }

    clean() {
        this.stopAll();
        this.uncacheAll();
        this.curBGMUrl = null;
        this.bgmAudioID = -1;
    }
}
export const sd = AudioManager.Instance;