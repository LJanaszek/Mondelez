import { useEffect } from "react";
import CompassDebugTools from "../../../dev/compass-debug-tools/compass-debug-tools";
import { useConfigModuleState } from "../../../../modules/config";
import useFinishGameStep from "../../../../modules/game/hooks/use-finish-game-step";
import useMultiGeoStep from "../../../../modules/game/hooks/use-multi-geo-step";
import useScenario from "../../../../modules/game/hooks/use-scenario";
import { GAME_STEP_TYPE, GeoStep } from "../../../../modules/game/types";
import { GeoModuleProvider } from "../../../../modules/geo";
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import GameErrorPage from "../../../../routes/game/error";
import MultiPointCompassViewContent from "./content";
import { useGameState } from "../../../../modules/game/hooks/use-game-state";


/**
 * Wrapper przygotowywujący dane dla kroku z wieloka puktami geograficznymi
 */
export default function MultiPointCompassView({ stepId }: { stepId: string }) {

    const { showDebug } = useConfigModuleState();
    const {step, noCompletedPoints} = useMultiGeoViewData(stepId);

    return <>
        {step && <GeoModuleProvider>
            <ScrollToMe trigger={step.id} behavior="smooth" />
            <MultiPointCompassViewContent geoSteps={noCompletedPoints} />
            {showDebug && <CompassDebugTools />}
        </GeoModuleProvider>}
        {!step && <GameErrorPage />}
    </>
}

function useMultiGeoViewData(stepId: string) {
    const {completedSteps} = useGameState();
    const step = useMultiGeoStep(stepId)
    const scenario = useScenario();
    const finishStep = useFinishGameStep();

    const geoPoints = scenario.steps
        .filter(s => (step?.stepsId || []).includes(s.id))
        .filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];

    const completedPoints = geoPoints.filter(p => completedSteps.includes(p.id)).length;

    const noCompletedPoints = geoPoints.filter(p => !completedSteps.includes(p.id));

    // Jeżeli gracz zaliczył już określoną ilość punktów to wykonujemy `finishStep`
    useEffect(() => {
        if (step && completedPoints >= step.minVisitedPoints) {
            finishStep(step.id);
        }
    }, [completedPoints, step, finishStep]);

    return {
        step,
        noCompletedPoints
    }
}
