import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';
import { PointData } from './types';

type AppConfig = {
    assetsPath: string,
    onPointerClicked(id: string): void;
}

export const MAP_WIDTH = 529;
export const MAP_HEIGHT = 938;

export default class PixiApp extends PIXI.Application {

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xDFD7CD,
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        if (this.renderer.view.style) {
            this.renderer.view.style.touchAction = 'auto';
        }

        loadSprites([
            ['map', `${config.assetsPath}map.png`],
            ['pinezka', `${config.assetsPath}pinezka.png`],
        ]).then(() => {
            this.initApp();
        });

        this.renderer.on('resize', () => {
            this.onResize();
        })
    }

    events = new PIXI.utils.EventEmitter();

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this);

        this.gameScreen.events.on('pointer-clicked', (id) => {
            this.config.onPointerClicked(id);
        })

        this.stage.addChild(this.gameScreen);
        this.events.emit('ready');
        this.onResize();
    }

    private onResize() {}

    public destroy(x: boolean) {
        super.destroy(x);
    }

    setPoints(active: string[], inactive: string[]) {
        this.gameScreen?.setPoints(active, inactive);
    }

    setSelectedPoint(id: string | null) {
        this.gameScreen?.setSelectedPoint(id);
    }

    setMapPointsData(points: PointData[]) {
        this.gameScreen?.setMapPointData(points);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
