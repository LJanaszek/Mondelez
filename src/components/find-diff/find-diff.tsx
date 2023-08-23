import { useEffect, useRef, useState } from "react"
import PixiApp from "./pixi-app/app";
import styles from './find-diff.module.scss';
import { ItemData } from "./pixi-app/types";

type Props = {
    onGameStateChanged(data: FindDiffGameState): void
    targets: ItemData[],
    imgWidth: number,
    imgHeight: number,
    img1src: string,
    img2src: string
}

export type FindDiffGameState = {
    targetCount: number,
    findedTargetCount: number,
    isComplete: boolean
}

export function FindDiff({
    targets,
    img1src,
    img2src,
    imgWidth,
    imgHeight,
    onGameStateChanged
}: Props) {
    // Ref do kontenera w którym umieścimy Widget PIXI
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    // Tu przechowywujemy referencje do mapy pomiędzy renderowaniami.
    const appRef = useRef<PixiApp>();

    // Czy Widget PIXI jest gotowy do przyjmowania danych
    const [appReady, setAppReady] = useState(false);
    // console.log(appReady)
    // W tym useEffect tworzymy instancje mapy.
    useEffect(() => {
        if (appRef.current) return;

        const app = new PixiApp({
            targets,
            img1src,
            img2src,
            imgWidth,
            imgHeight,
            onGameStateChanged
        });

        appRef.current = app;

        app.events.on('ready', () => {
            console.log('onReady.....');
            setAppReady(true);
        });

        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(app.view as HTMLCanvasElement);
        }

        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [setAppReady, targets, img1src, img2src, imgWidth, imgHeight, onGameStateChanged]);

    return <div className={styles.findDiffComponent} ref={widgetContainerRef}></div>
}
