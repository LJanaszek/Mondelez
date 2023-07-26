import { useCallback, useMemo, useState } from "react"
import Box from "../../../layout/box/box"
import { MapComponent } from "../../../map/map-component"
import style from "../style.module.css"
import { PointData } from "../../../map/pixi-app/types"
import { Popup } from "../../../../molecules/popup/popup"
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../../../modules/game"

type Props = {
    onNext(): void
}

export interface GameMapPoint extends PointData {
    geoPointId: string
}

export default function Page_map({onNext}: Props) {

    const [selectedPoint, setSelectedPoint] = useState<string>();
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const onPointerClicked = useCallback((id: string) => {
        console.log(`KTOS KLIKNAL ${id} `);
        setSelectedPoint(id);
        setShowPopup(true);
    }, [setSelectedPoint, setShowPopup])

    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
            id: '1',
            position:{
                x: 100,
                y: 100,
            },
            geoPointId: '2.1',
        },
        {
            id: '2',
            position:{
                x: 200,
                y: 200,
            },
            geoPointId: '3.1',
        },
        {
            id: '3',
            position:{
                x: 300,
                y: 300,
            },
            geoPointId: '4.1',
        },
    ];
    }, []);

    const activePointIds: string[] = useMemo(() => {
        return ['1','2','3'];
    }, [])

    const inactivePointIds: string[] = useMemo(() => {
        return ['1','2','3'];
    }, [])

    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setSelectedPoint('')
    }, [setShowPopup, setSelectedPoint]);

    const dispatch = useGameModuleDispatch();

    const onGoToClicked = useCallback(() => {

        
        const result = mapPointsData.find(x=>x.id === selectedPoint)
        if (result){

            const geoPointIdToGo = result.geoPointId;
            dispatch({
                type: GAME_MODULE_ACTION.SET_GAME_STEP,
                payload: {
                    id: geoPointIdToGo
                }
            })
        }

    }, [dispatch, selectedPoint, mapPointsData]);

    return <Box>
        <div className={style.mapContainer}>
        <MapComponent 
            onPointerClicked={onPointerClicked} 
            activePointIds={activePointIds} 
            inactivePointIds={inactivePointIds} 
            selectedPoint={selectedPoint} 
            mapPointsData={mapPointsData} 
            />
        </div>
        <button onClick={onNext}>Dalej</button>
        {showPopup && <Popup>
            <p>COS {showPopup ? 'TRUE' : 'FALSE'}</p>
            <button onClick={onGoToClicked}>JEDZIEMY TAM</button>
            <button onClick={onClosePopupClicked}>ZAMKNIJ</button>
        </Popup>
        }
        </Box>
}
