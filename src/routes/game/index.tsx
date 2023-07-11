import { useEffect, useMemo } from "react";
import SingleCompassView from "../../components/game/compass-view/single";
import DebugTools from "../../components/dev/debug-tools/debug-tools";
import { useConfigModuleState } from "../../modules/config";
import { GAME_MODULE_ACTION, useGameModuleDispatch, useGameModuleState } from "../../modules/game";
import useGameStep from "../../modules/game/hooks/use-game-step";
import { GameStep, GAME_STEP_TYPE } from "../../modules/game/types";
import GameErrorPage from "./error";
import MultiPointCompassView from "../../components/game/compass-view/multi";
import EndGamePage from "../../components/game/end";
import PageView from "../../components/game/page";
import WidgetView from "../../components/game/task";

export default function GamePage() {

    const step = useGameStep();
    const { gameComplete } = useGameModuleState();
    const dispatch = useGameModuleDispatch();
    const { showDebug } = useConfigModuleState();

    useEffect(() => {
        dispatch({
            type: GAME_MODULE_ACTION.START_GAME
        });
    }, [dispatch]);

    return <div>
        {!gameComplete && !step && <GameErrorPage />}
        {!gameComplete && step && <GameStepView step={step} />}
        {gameComplete && <EndGamePage />}
        {showDebug && <DebugTools />}
    </div>
}

function GameStepView({ step }: { step: GameStep }) {
    return useMemo(() => {
        switch (step.type) {
            case GAME_STEP_TYPE.GEO_STEP:
                return <SingleCompassView pointId={step.id} />

            case GAME_STEP_TYPE.TASK:
                return <WidgetView id={step.id} />

            case GAME_STEP_TYPE.PAGE:
                return <PageView id={step.id} />

            case GAME_STEP_TYPE.MULTI_GEO_STEP:
                return <MultiPointCompassView stepId={step.id} />

            default:
                return <GameErrorPage />
        }
    }, [step]);
}
