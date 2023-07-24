import { useEffect, useRef, useState } from "react"
import PixiApp from "./pixi-app/app";
import styles from './find-diff.module.scss';

type Props = {
    onComplete(): void
    onGameStateChanged(data: FindDiffGameState): void
}

export type FindDiffGameState = {
    targetCount: number,
    findedTargetCount: number,
    isComplete: boolean
}

export function FindDiff({ onComplete, onGameStateChanged }: Props) {
    // Ref do kontenera w którym umieścimy Widget PIXI
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    // Tu przechowywujemy referencje do mapy pomiędzy renderowaniami.
    const appRef = useRef<PixiApp>();

    // Czy Widget PIXI jest gotowy do przyjmowania danych
    const [appReady, setAppReady] = useState(false);

    // W tym useEffect tworzymy instancje mapy.
    useEffect(() => {
        if (appRef.current) return;

        const app = new PixiApp({
            assetsPath: '/',
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
    }, [onComplete, setAppReady]);

    return <div className={styles.findDiffComponent} ref={widgetContainerRef}></div>
}
