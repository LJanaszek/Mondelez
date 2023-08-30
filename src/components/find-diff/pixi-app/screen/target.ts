import * as PIXI from 'pixi.js';

export default class Target extends PIXI.Container {
    events = new PIXI.utils.EventEmitter();
    constructor(public id: string) {
        super();

        // Tutaj definiujemy rozmiar obszaru klikalnego.
        const hitArea = new PIXI.Rectangle(-20, -20, 40, 40);
        this.hitArea = hitArea;

        // TO JEST DEBUG...
        const gfx = new PIXI.Graphics();
        gfx.visible  = false;
        gfx.lineStyle(2, 0xFEEB77, 1);
            gfx.drawShape(hitArea);
            this.addChild(gfx);
        // this.addChild(gfx);
        // ...TU SIE KONCZY DEBUG

        this.eventMode = 'static';

        this.on('pointerdown', () => {
            this.events.emit('target-clicked');
            gfx.visible = true
            
        })
    }

    hide() {
        this.visible = false;
    }
}
