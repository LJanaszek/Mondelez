import { PropsWithChildren, useRef, useState, useEffect } from "react";
import styles from './map-component.module.scss';
import PixiApp from "./pixi-app/app";
import { PointData } from "./pixi-app/types";

type Props = {
    onPointerClicked(id: string): void;
    activePointIds: string[],
    inactivePointIds: string[],
    mapPointsData: PointData[],
    selectedPoint?: string,
}

export function MapComponent({ onPointerClicked, activePointIds, inactivePointIds, selectedPoint, mapPointsData }: PropsWithChildren<Props>) {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<PixiApp>();

    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        if (appRef.current) return;

        const app = new PixiApp({
            assetsPath: '/',
            onPointerClicked
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
    }, [onPointerClicked, setAppReady]);

    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setPoints(activePointIds, inactivePointIds);
        }
    }, [activePointIds, inactivePointIds, appReady]);

    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setSelectedPoint(selectedPoint || null);
        }
    }, [selectedPoint, appReady]);

    useEffect(() => {
        if (appRef.current && appReady) {
            console.log('BLE!');
            appRef.current.setMapPointsData(mapPointsData || []);
        }
    }, [mapPointsData, appReady]);

    return <div className={styles.mapComponent} ref={widgetContainerRef}></div>
}
