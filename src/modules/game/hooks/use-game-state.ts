import { useGameModuleState } from "..";

export function useGameState() {
    const {gameState} = useGameModuleState();

    return gameState;
}