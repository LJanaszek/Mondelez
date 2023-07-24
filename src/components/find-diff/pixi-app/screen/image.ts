import * as PIXI from 'pixi.js';
import { ItemData } from '../data';
import Target from './target';
import { IMG_WIDTH, IMG_HEIGHT } from '../app';

export class GameImage extends PIXI.Container {
    events = new PIXI.utils.EventEmitter();

    constructor(
        private imgKey: string,
        targets: ItemData[]
    ) {
        super();

        this.sortableChildren = true;

        const bg = PIXI.Sprite.from(imgKey);

        this.addChild(bg);

        targets.forEach((item) => {
            const target = new Target(item.id);

            target.position.set(
                item.position.x % IMG_WIDTH,
                item.position.y % IMG_HEIGHT
            );

            target.position.set(
                item.position.x % IMG_WIDTH,
                item.position.y % IMG_HEIGHT
            );

            target.events.on('target-clicked', () => {
                this.events.emit('target-clicked', target.id);
            });

            this.addChild(target);
        })
    }
}
