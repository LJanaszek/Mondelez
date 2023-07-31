import { GameScenario, GAME_STEP_TYPE } from "./types";
/*
p1
p2
p3
p4


p7
*/
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
            nextStep: '2.3'
        },
        {
            id: '2.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4',
            nextStep: '1.1'
        },
        {
            id:'3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 2"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3',
            nextStep: '3.3'
        },
        {
            id: '3.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7', //zdjecie
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
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-8',
            nextStep: '4.3'
        },
        {
            id: '4.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-9', //sos
            nextStep: '1.1'
        },
        {
            id:'5.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 4"],
            nextStep: '5.2'
        },
        {
            id: '5.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10',
            nextStep: '5.3'
        },
        {
            id: '5.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11', //apteczka
            nextStep: '1.1'
        },
        {
            id:'6.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 5"],
            nextStep: '6.2'
        },
        {
            id: '6.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-12',
            nextStep: '6.3'
        },
        {
            id: '6.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-13', //jak duże masz
            nextStep: '1.1'
        },
        {
            id:'7.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 6"],
            nextStep: '7.2'
        },
        {
            id: '7.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-14',
            nextStep: '7.3'
        },
        {
            id: '7.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-15', //quiz 
            nextStep: '1.1'
        },
        {
            id:'8.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 7"],
            nextStep: '8.2'
        },
        {
            id: '8.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-16',
            nextStep: '8.3'
        },
        {
            id: '8.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-6', //dopasuj opis do nazwy
            nextStep: '1.1'
        },
        {
            id:'9.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 8"],
            nextStep: '9.2'
        },
        {
            id: '9.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-18',
            nextStep: '9.3'
        },
        {
            id: '9.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5', //ulóż w kolejności
            nextStep: '1.1'
        },
        {
            id:'10.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 9"],
            nextStep: '10.2'
        },
        {
            id: '10.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-20',
            nextStep: '10.3'
        },
        {
            id: '10.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-21', //znajdź różnicę
            nextStep: '1.1'
        },
        {
            id:'11.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 10"],
            nextStep: '11.2'
        },
        {
            id: '11.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-22',
            nextStep: '11.3'
        },
        {
            id: '11.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-23', //ułóż w kolejności
            nextStep: '1.1'
        },
        {
            id:'12.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 11"],
            nextStep: '12.2'
        },
        {
            id: '12.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-24',
            nextStep: '12.3'
        },
        {
            id: '12.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-25', //zrób zdjęcie
            nextStep: '1.1'
        },
        {
            id:'13.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.238770, 
                lng: 21.006676
            },
            name: ["Punkt geo 12"],
            nextStep: '13.2'
        },
        {
            id: '13.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-26',
            nextStep: '13.3'
        },
        {
            id: '13.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-27', //tekst
            nextStep: '1.1'
        },
        {
            id: 'timer-page-end',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-time-end',
            nextStep: '15.1'
        },
        {
            id: 'game-complete',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'game-complete',
            nextStep: '15.1'
        },
        {
            id: '15.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'summary-page',
            nextStep: null
        },
    ]
}
