import * as PIXI from 'pixi.js';
import { FindDiffGameState } from '../find-diff';
import { ItemData } from './types';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    onGameStateChanged(data: FindDiffGameState): void,
    targets: ItemData[],
    img1src: string,
    img2src: string,
    imgWidth: number,
    imgHeight: number,

}

export default class PixiApp extends PIXI.Application {

    public events = new PIXI.utils.EventEmitter();

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xffffff,
            width: config.imgWidth * 2.1,
            
            height: config.imgHeight,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        if (this.renderer.view.style) {
            this.renderer.view.style.touchAction = 'auto';
        }

        loadSprites([
            ['img-left', config.img1src],
            ['img-right', config.img2src]
        ]).then(() => {
            this.initApp();
        })
    }

    private gameScreen?: GameScreen;

    private initApp() {
        if (this.stage) {
            this.gameScreen = new GameScreen(
                this.config.targets,
                this.config.imgWidth,
                this.config.imgHeight
            );
    
            this.gameScreen.events.on('update-game-state', (data) => {
                this.config.onGameStateChanged(data);
            })
    
            this.config.onGameStateChanged({
                targetCount: this.config.targets.length,
                findedTargetCount: 0,
                isComplete: false
            })
    
            this.stage.addChild(this.gameScreen);
        }
    }

    isValid() {
        return this.gameScreen?.isValid() || false;
    }

    markInvalid() {
    }

    reset() {
        this.gameScreen?.reset();
    }

    public destroy(x: boolean) {
        super.destroy(x);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
