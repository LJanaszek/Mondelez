import { useEffect } from "react";
import { useGameModuleState } from "../../../modules/game";
import { GAME_STEP_TYPE, GeoStep } from "../../../modules/game/types";
import styles from './debug-map.module.scss';

type Props = {
    onClose: () => void
}

export default function DebugMap({onClose}: Props) {

    const {scenario} = useGameModuleState();
    const geoPoints = scenario.steps.filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];

    useEffect(() => {
        const id = setTimeout(() => {
            const map = new google.maps.Map(document.getElementById("map-container") as HTMLElement, {
                center: geoPoints[0].position,
                zoom: 15,
              });

              geoPoints.forEach(p => {
                  new google.maps.Marker({
                    position: p.position,
                    map,
                    title: p.name.join(' '),
                  });
              })

        }, 500);

        return () => {
            clearTimeout(id);
        }
    }, [geoPoints]);

    return <div className={styles.debugMap}>
        <div id="map-container" className={styles.mapContainer}></div>
        <button className={styles.close} onClick={onClose}>ZAMKNIJ</button>
    </div>
}
