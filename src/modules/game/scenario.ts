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
            id: '0.2',
            type: GAME_STEP_TYPE.MULTI_GEO_STEP,
            stepsId: ['4.1', '5.1', '6.1'],
            minVisitedPoints: 3,
            nextStep: '7.1'
        },
        {
            id: '1.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.237633,
                lng:  21.009439
            },
            name: ['Punkt geo 1'],
            nextStep: '1.2'
        },
        {
            id: '1.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2',
            nextStep: '2.1'
        },
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.237488,
                lng:  21.008548
            },
            name: ["Punkt geo 2"],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3',
            nextStep: '3.1'
        },
        {
            id: '3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238214, 
                lng: 21.007073
            },
            name: ["Punkt geo 3"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-1',
            nextStep: '0.2'
        },
        {
            id:'4.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 4"],
            nextStep: '4.2'
        },
        {
            id: '4.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4',
            nextStep: '0.2'
        },
        {
            id:'5.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.239463, 
                lng: 21.006097
            },
            name: ["Punkt geo 5"],
            nextStep: '5.2'
        },
        {
            id: '5.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5',
            nextStep: '0.2'
        },
        {
            id:'6.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.240011, 
                lng: 21.005866
            },
            name: ["Punkt geo 6"],
            nextStep: '6.2'
        },
        {
            id: '6.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-6',
            nextStep: '0.2'
        },
        {
            id: '7.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7',
            nextStep: '8.1'
        },
        {
            id:'8.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.240139, 
                lng: 21.006789
            },
            name: ["Punkt geo 7"],
            nextStep: '8.2'
        },
        {
            id: '8.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-2',
            nextStep: '9.1'
        },
        {
            id: '9.1',
            type: GAME_STEP_TYPE.MULTI_GEO_STEP,
            stepsId: ['10.1', '11.1', '12.1'],
            minVisitedPoints: 2,
            nextStep: '13.1'
        },
        {
            id:'10.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.240323, 
                lng: 21.007996
            },
            name: ["Punkt geo 8"],
            nextStep: '10.2'
        },
        {
            id: '10.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-8',
            nextStep: '9.1'
        },
        {
            id:'11.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.240497, 
                lng: 21.009138
            },
            name: ["Punkt geo 9"],
            nextStep: '11.2'
        },
        {
            id: '11.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-9',
            nextStep: '9.1'
        },
        {
            id:'12.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.240783, 
                lng: 21.010469
            },
            name: ["Punkt geo 10"],
            nextStep: '12.2'
        },
        {
            id: '12.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10',
            nextStep: '9.1'
        },
        {
            id:'13.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.239785, 
                lng: 21.012193
            },
            name: ["Punkt geo 11"],
            nextStep: '13.2'
        },
        {
            id: '13.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11',
            nextStep: null
        },
    ]
}
