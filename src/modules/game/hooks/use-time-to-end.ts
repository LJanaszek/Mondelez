import { useEffect, useState } from "react";
import { useGameState } from "./use-game-state";

export function useTimeToEnd(){

    const [timeNow, setTimeNow] = useState(0);

    const GAME_TIME_LIMIT = 2 * 60 * 60 * 1000;
    // const GAME_TIME_LIMIT = 10 * 1000;
    
    const {startGameTime} = useGameState()
    
    useEffect(() => {
        const id = setInterval(() => {
            setTimeNow(Date.now());
        }, 300);

        return () => {
            clearInterval(id);
        }
    }, [setTimeNow]);
    if(!startGameTime){
        return null
    }
    const timeToShow = GAME_TIME_LIMIT-(timeNow-startGameTime);    
    return timeToShow;
}