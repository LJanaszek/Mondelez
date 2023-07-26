import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '0.1',
    steps: [
        {
            id: '0.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1',
            nextStep: '1.1'
        },
        {
            id: '1.1',
            type:GAME_STEP_TYPE.PAGE,
            pageId: 'page-map',
            nextStep:'2.1',
        },
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.237633,
                lng:  21.009439
            },
            name: ['Punkt geo 1'],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2',
            nextStep: '1.1'
        },
        {
            id: '3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238214, 
                lng: 21.007073
            },
            name: ["Punkt geo 2"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'page-3',
            nextStep: '1.1'
        },
        {
            id:'4.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 3"],
            nextStep: '4.2'
        },
        {
            id: '4.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-3',
            nextStep: '1.1'
        },
        {
            id: '13.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11',
            nextStep: null
        },
    ]
}
