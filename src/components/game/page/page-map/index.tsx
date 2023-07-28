import { useCallback, useEffect, useMemo, useState } from "react"
import Box from "../../../layout/box/box"
import { MapComponent } from "../../../map/map-component"
import style from "../style.module.css"
import { PointData } from "../../../map/pixi-app/types"
import { Popup } from "../../../../molecules/popup/popup"
import { GAME_MODULE_ACTION, useGameModuleDispatch, useGameModuleState } from "../../../../modules/game"

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
        {
            id: '4',
            position:{
                x: 400,
                y: 400,
            },
            geoPointId: '5.1',
        },
        {
            id: '5',
            position:{
                x: 500,
                y: 500,
            },
            geoPointId: '6.1',
        },
        {
            id: '6',
            position:{
                x: 500,
                y: 600,
            },
            geoPointId: '7.1',
        },
        {
            id: '7',
            position:{
                x: 400,
                y: 500,
            },
            geoPointId: '8.1',
        },
        {
            id: '8',
            position:{
                x: 300,
                y: 400,
            },
            geoPointId: '9.1',
        },
        {
            id: '9',
            position:{
                x: 200,
                y: 300,
            },
            geoPointId: '10.1',
        },
        {
            id: '10',
            position:{
                x: 100,
                y: 200,
            },
            geoPointId: '11.1',
        },
        {
            id: '11',
            position:{
                x: 500,
                y: 700,
            },
            geoPointId: '12.1',
        },
        {
            id: '12',
            position:{
                x: 400,
                y: 600,
            },
            geoPointId: '13.1',
        },
    ];
    }, []);

    const gameState = useGameModuleState();
    const completedPoints = gameState.gameState.completedSteps;

    const activePointIds: string[] = useMemo(() => {
        // Zwróć listę ID puktów mapy dla których geoPointId nie ma w tablicy completedPoints

        // [].find, [].filter, [].includes, [].map

        const result = mapPointsData.filter(x => !completedPoints.includes(x.geoPointId));
        

        return result.map((x) => {
            return x.id
        });
    }, [completedPoints, mapPointsData]);

    const inactivePointIds: string[] = useMemo(() => {
        // Zwróć listę ID puktów mapy dla których geoPointId jest w tablicy completedPoints

        const result = mapPointsData.filter(x => completedPoints.includes(x.geoPointId));

        return result.map((x) => {
            return x.id
        });
    }, [completedPoints, mapPointsData]);

    const dispatch = useGameModuleDispatch();
    useEffect(() => {
        if (activePointIds.length === 0) {
            dispatch({
                type: GAME_MODULE_ACTION.SET_GAME_STEP,
                payload: {
                    id: '14.3'
                }
            })
        } 
    }, [activePointIds, dispatch])

    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setSelectedPoint('')
    }, [setShowPopup, setSelectedPoint]);


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
