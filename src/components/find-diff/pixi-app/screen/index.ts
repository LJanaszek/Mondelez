import * as PIXI from 'pixi.js';
import { FindDiffGameState } from '../../find-diff';
import { IScreen } from "../app";
import { GameImage } from './image';
import { ItemData } from '../types';

export default class GameScreen extends PIXI.Container implements IScreen {

    errorLayer = new PIXI.Container();

    findedTargets = new Set<string>();

    events = new PIXI.utils.EventEmitter();

    constructor(private targets: ItemData[], imgWidth: number, imgHeight: number) {
        super();

        this.sortableChildren = true;

        const imgLeft = new GameImage('img-left', targets, imgWidth, imgHeight);
        const imgRight = new GameImage('img-right', targets, imgWidth, imgHeight);

        imgLeft.events.on('target-clicked', (id) => this.onTargetClicked(id));
        imgRight.events.on('target-clicked', (id) => this.onTargetClicked(id));

        imgRight.position.set(imgWidth, 0);

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
            targetCount: this.targets.length,
            findedTargetCount: this.findedTargets.size,
            isComplete: this.targets.length === this.findedTargets.size
        } as FindDiffGameState)
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
