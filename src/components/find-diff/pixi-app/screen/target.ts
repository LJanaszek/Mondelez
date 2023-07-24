import * as PIXI from 'pixi.js';

export default class Target extends PIXI.Container {
    events = new PIXI.utils.EventEmitter();
    constructor(public id: string) {
        super();

        const hitArea = new PIXI.Rectangle(-20, -20, 40, 40);
        this.hitArea = hitArea

        const gfx = new PIXI.Graphics();
        gfx.lineStyle(2, 0xFEEB77, 1);
        gfx.drawShape(hitArea);
        this.addChild(gfx);

        this.eventMode = 'static';

        this.on('pointerdown', () => {
            this.events.emit('target-clicked');
        })
    }

    hide() {
        this.visible = false;
    }
}
