import * as PIXI from 'pixi.js';
import { FindDiffGameState } from '../find-diff';
import { ItemData } from './types';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    onGameStateChanged(data: FindDiffGameState): void,
    targets: ItemData[],
    img1src: string,
    img2src: string
}

export const IMG_WIDTH = 443;
export const IMG_HEIGHT = 788;

export const APP_WIDTH = IMG_WIDTH*2;
export const APP_HEIGHT = IMG_HEIGHT;

export default class PixiApp extends PIXI.Application {

    public events = new PIXI.utils.EventEmitter();

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xDFD7CD,
            width: APP_WIDTH,
            height: APP_HEIGHT,
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
        this.gameScreen = new GameScreen(this.config.targets);

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
