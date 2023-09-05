import Box from "../../../layout/box/box";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import { AccuracyError } from "../accuracy-error";
import { GeoInfo } from "../geo-info/geo-info";
import { ButtonLike } from "../../../../atoms/button-like";

export default function CompassViewContent({ step }: { step: GeoStep }) {

    const { isAccuracyOk, error, closestPoint } = useCompassView([step]);
    const { distance, bearing } = closestPoint;
    const name = closestPoint.point.name;

    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;
    const showAccuracyError = !isAccuracyOk && !error;
    const showGeoInfo = isAccuracyOk && !error;

    return <div>
        {showPermitionError && <Box>
            <h3>Błąd uprawnień.</h3>
            <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
            <ButtonLike><button onClick={()=>{window.location.reload()}}>odśwież</button></ButtonLike>
        </Box>}
        {showAccuracyError && <AccuracyError />}
        {showGeoInfo && <GeoInfo bering={bearing} name={name} distance={distance} />}
    </div>
}
