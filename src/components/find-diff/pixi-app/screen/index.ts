import * as PIXI from 'pixi.js';
import { FindDiffGameState } from '../../find-diff';
import { IMG_HEIGHT, IMG_WIDTH, IScreen } from "../app";
import { SCREEN } from '../data';
import { GameImage } from './image';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    findedTargets = new Set<string>();

    events = new PIXI.utils.EventEmitter();

    constructor() {
        super();

        this.sortableChildren = true;

        const imgLeft = new GameImage('img-left', SCREEN.ITEMS);
        const imgRight = new GameImage('img-right', SCREEN.ITEMS);

        imgLeft.events.on('target-clicked', (id) => this.onTargetClicked(id));
        imgRight.events.on('target-clicked', (id) => this.onTargetClicked(id));

        imgRight.position.set(IMG_WIDTH, 0);

        this.addChild(imgLeft);
        this.addChild(imgRight);
    }

    private onTargetClicked(id: string) {
        console.log('onTargetClicked', id);

        this.findedTargets.add(id);
        this.sendInfo();
    }

    private sendInfo() {
        this.events.emit('update-game-state', {
            targetCount: SCREEN.ITEMS.length,
            findedTargetCount: this.findedTargets.size,
            isComplete: SCREEN.ITEMS.length === this.findedTargets.size
        } as FindDiffGameState)
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
