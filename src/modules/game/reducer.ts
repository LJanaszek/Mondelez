import {
  GameModuleState,
  GameModuleAction,
  GAME_MODULE_ACTION,
  initGameModuleState,
} from ".";
import { getPoint } from "../geo/utils/get-point";
import { GameStep, GAME_STEP_TYPE } from "./types";

export default function UserReducer(
  state: GameModuleState,
  action: GameModuleAction
): GameModuleState {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case GAME_MODULE_ACTION.SET_POINT_POSITION:
      const { ids, position } = payload;

      console.log({ ids, position });

      return {
        ...state,
        scenario: {
          ...state.scenario,
          steps: state.scenario.steps.reduce(
            (prev: GameStep[], next: GameStep) => {
              if (ids.includes(next.id)) {
                return [
                  ...prev,
                  {
                    ...next,
                    position: position,
                  },
                ];
              }

              return [...prev, next];
            },
            []
          ),
        },
      };

    case GAME_MODULE_ACTION.RESET_GAME:
      return {
        ...initGameModuleState,
      };

    case GAME_MODULE_ACTION.START_GAME:
      console.log('Czy mam resetowac gre')
      if (!state.gameStarted || !state.gameState.startGameTime) {
        
        return {
          ...state,
          gameState: {
            ...state.gameState,
            startGameTime: Date.now(),
          },
          gameStarted: true,
        };
      }

      return {...state};

    case GAME_MODULE_ACTION.SET_GAME_STEP:
      return {
        ...state,
        activeGameStep: payload.id,
      };

    case GAME_MODULE_ACTION.END_GAME:
      return {
        ...state,
        gameComplete: true,
      };

    case GAME_MODULE_ACTION.SET_IGNORE_ACCURACY:
      return {
        ...state,
        ignoreAccuracy: payload.ignoreAccuracy,
      };

    case GAME_MODULE_ACTION.COMPLETE_STEP:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          completedSteps: [...state.gameState.completedSteps, payload.stepId],
        },
      };

    case GAME_MODULE_ACTION.PLACE_DEBUG_POINTS:
      const geoPoints = state.scenario.steps.filter(
        (s) => s.type === GAME_STEP_TYPE.GEO_STEP
      );

      const dAngle = 360 / geoPoints.length;
      let angle = 0;

      return {
        ...state,
        scenario: {
          ...state.scenario,
          steps: state.scenario.steps.map((s) => {
            if (s.type !== GAME_STEP_TYPE.GEO_STEP) return s;

            s.position =
              getPoint(angle, payload.distance, payload.position) || s.position;
            angle += dAngle;

            return s;
          }),
        },
      };
    case GAME_MODULE_ACTION.SAVE_ANSWER:
      console.log({ action, state });
      const oldAnswers = state.gameState?.answers || [];
      const oldAnswer = oldAnswers.find((a) => a.id === payload.id);
      let answers: any[] = [];

      if (oldAnswer) {
        answers = oldAnswers.map((a) => {
          if (a.id === payload.id) {
            a.value = payload.value;
          }

          return a;
        });
      } else {
        answers = [
          ...oldAnswers,
          {
            id: payload.id,
            value: payload.value,
          },
        ];
      }

      return {
        ...state,
        gameState: {
          ...state.gameState!,
          answers,
        },
      };
  }
}
