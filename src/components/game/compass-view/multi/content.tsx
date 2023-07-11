import Box from "../../../layout/box/box";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import { AccuracyError } from "../accuracy-error";
import { GeoInfo } from "../geo-info/geo-info";
import styles from './content.module.scss';

export default function MultiPointCompassViewContent({ geoSteps }: { geoSteps: GeoStep[] }) {

    const { isAccuracyOk, error, points } = useCompassView(geoSteps);

    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;
    const showAccuracyError = !isAccuracyOk && !error;
    const showGeoInfo = isAccuracyOk && !error;

    return <div className={styles.content}>
        {showPermitionError && <Box>
            <h3>Błąd uprawnień.</h3>
            <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
        </Box>}
        {showAccuracyError && <AccuracyError />}
        {showGeoInfo && points.map(point => {
            return <GeoInfo key={point.point.id} bering={point.bearing} name={point.point.name} distance={point.distance} />
        })

        }

    </div>
}
