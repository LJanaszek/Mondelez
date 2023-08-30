import * as PIXI from 'pixi.js';
import { ItemData } from '../types';
import Target from './target';
import { LineStyle } from '@material-ui/icons';

export class GameImage extends PIXI.Container {
    events = new PIXI.utils.EventEmitter();
    constructor(
        private imgKey: string,
        targets: ItemData[],
        imgWidth: number,
        imgHeight: number
    ) {
        super();

        this.sortableChildren = true;

        const bg = PIXI.Sprite.from(imgKey);
        this.addChild(bg);

        targets.forEach((item) => {
            const target = new Target(item.id);

            target.position.set(
                item.position.x % imgWidth,
                item.position.y % imgHeight
            );
            

            target.events.on('target-clicked', () => {
                this.events.emit('target-clicked', target.id);
                target.visible = true;
            });
            this.addChild(target);

        })
    }
}
