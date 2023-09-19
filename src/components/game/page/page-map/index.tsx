import { useCallback, useEffect, useMemo, useState } from "react"
import Box from "../../../layout/box/box"
import { MapComponent } from "../../../map/map-component"
import style from "../style.module.scss"
import { PointData } from "../../../map/pixi-app/types"
import { Popup } from "../../../../molecules/popup/popup"
import { GAME_MODULE_ACTION, useGameModuleDispatch, useGameModuleState } from "../../../../modules/game"
import useScenario from "../../../../modules/game/hooks/use-scenario"
import { GAME_STEP_TYPE, GeoStep } from "../../../../modules/game/types"
import buttonRide from "../../../../assets/buttonRide.png"
import buttonClose from "../../../../assets/buttonClose.png"

type Props = {

    onNext(): void
}

export interface GameMapPoint extends PointData {
    geoPointId: string
}

export default function Page_map({ onNext }: Props) {
    const scenario = useScenario();
    const geoPoints = scenario.steps.filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];
    const [selectedPoint, setSelectedPoint] = useState<string>();
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showTime, setShowTime] = useState<boolean>(false);
    const [positionGeoLat, setPositionGeoLat] = useState<string>();
    const [positionGeoLng, setPositionGeoLng] = useState<string>();



    const mapPointsData: GameMapPoint[] = useMemo(() => {
        return [
            {
                id: '1',
                position: {
                    x: 360,
                    y: 370,
                },
                geoPointId: '6.1',
            },
            {
                id: '2',
                position: {
                    x: 410,
                    y: 280,
                },
                geoPointId: '3.1',
            },
            {
                id: '3',
                position: {
                    x: 460,
                    y: 400,
                },
                geoPointId: '5.1',
            },
            {
                id: '4',
                position: {
                    x: 530,
                    y: 440,
                },
                geoPointId: '9.1',
            },
            {
                id: '5',
                position: {
                    x: 520,
                    y: 250,
                },
                geoPointId: '11.1',
            },
            {
                id: '6',
                position: {
                    x: 600,
                    y: 200,
                },
                geoPointId: '2.1',
            },
            {
                id: '7',
                position: {
                    x: 660,
                    y: 120,
                },
                geoPointId: '10.1',
            },
            {
                id: '8',
                position: {
                    x: 860,
                    y: 140,
                },
                geoPointId: '4.1',
            },
            {
                id: '9',
                position: {
                    x: 760,
                    y: 400,
                },
                geoPointId: '12.1',
            },
            {
                id: '10',
                position: {
                    x: 750,
                    y: 500,
                },
                geoPointId: '8.1',
            },
            {
                id: '11',
                position: {
                    x: 800,
                    y: 570,
                },
                geoPointId: '13.1',
            },
            {
                id: '12',
                position: {
                    x: 800,
                    y: 660,
                },
                geoPointId: '7.1',
            },
        ];
    }, []);

    
    const onPointerClicked = useCallback((id: string) => {
        
        // console.log(`KTOS KLIKNAL ${id} `);
        // alert (`KTOS KLIKNAL ${id} `);
        setSelectedPoint(id);
        setShowPopup(true);
        setTimeout(()=>{setShowTime(true)},300);

        //szukanie długości i szerokości geo 
        
        const a = (mapPointsData[Number(id) - 1].geoPointId)
        const positionGeo = (geoPoints.find(x => x.id === a)?.position)
        setPositionGeoLat(String(positionGeo?.lat))
        setPositionGeoLng(String(positionGeo?.lng))
    }, [setSelectedPoint, setShowPopup, setShowTime]);


    const gameState = useGameModuleState();
    const completedPoints = gameState.gameState.completedSteps;

    const activePointIds: string[] = useMemo(() => {
        // Zwróć listę ID puktów mapy dla których geoPointId nie ma w tablicy completedPoints

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
                    id: 'summary-page'
                }
            })
        }
    }, [activePointIds, dispatch])

    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setShowTime(false);
        setSelectedPoint('')
    }, [setShowPopup, setSelectedPoint]);


    const onGoToClicked = useCallback(() => {


        const result = mapPointsData.find(x => x.id === selectedPoint)
        if (result) {
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
        <div className={style.mapPage}>
            <h1>Wrocław</h1>
            <p>wybierzcie na mapie punkt do którego chcecie się udać</p>
            <div className={style.mapContainer}>
                <MapComponent
                    onPointerClicked={onPointerClicked}
                    activePointIds={activePointIds}
                    inactivePointIds={inactivePointIds}
                    selectedPoint={selectedPoint}
                    mapPointsData={mapPointsData}
                />
            </div>
            
            {showPopup && showTime && <Popup>
                <p className={style.popupP}>{showPopup} {positionGeoLat}, {positionGeoLng}</p>
                <div className={style.buttonRowNav}>
                    <button onClick={onClosePopupClicked}><img src={buttonClose} alt="wróć do mapy" />wróć do mapy</button>
                    <button onClick={onGoToClicked}><img src={buttonRide} alt="jedziemy" />jedziemy tam</button>
                </div>
            </Popup>
            }
        </div>
    </Box>
}

