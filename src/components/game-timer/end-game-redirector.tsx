import { useEffect } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import { useTimeToEnd } from "../../modules/game/hooks/use-time-to-end";

export function EndGameRedirector(){
    const timeToEnd = useTimeToEnd();
    const dispatch = useGameModuleDispatch();
    useEffect(() => {
        if (timeToEnd && timeToEnd < 0) {
            dispatch({
                type: GAME_MODULE_ACTION.SET_GAME_STEP,
                payload: {
                    id: 'summary-page'
                }
            })
        } 
    }, [dispatch, timeToEnd])

    return <></>;
}