import createStore from "../../utils/store";
import reducer from "./reducer";

const LOCAL_STORAGE_KEY = 'geo-gra-main';

export type GameState = {
        // name: string,
        answers: {
            id: string,
            value: any
        }[]
    
    gameProgress: number
}

export type MainModuleState = {
    showHeader: boolean;
    showFooter: boolean;
    gameState?: GameState;
}

const initMainModuleState = {
    showHeader: true,
    showFooter: true
}


export enum MAIN_MODULE_ACTION {
    SET_HEADER,
    SET_FOOTER,
    SAVE_ANSWER
}

export type MainModuleAction = {
    type: MAIN_MODULE_ACTION,
    payload?: any
}

const [
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
] = createStore(reducer, initMainModuleState, LOCAL_STORAGE_KEY)


export {
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
}
