import { MainModuleState, MainModuleAction, MAIN_MODULE_ACTION } from ".";

export default function UserReducer(state: MainModuleState, action: MainModuleAction): MainModuleState {
    const { type, payload } = action;
    switch (type) {
        case MAIN_MODULE_ACTION.SET_HEADER:
            return {
                ...state,
                showHeader: payload.show
            }

        case MAIN_MODULE_ACTION.SET_FOOTER:
            return {
                ...state,
                showFooter: payload.show
            }
        case MAIN_MODULE_ACTION.SAVE_ANSWER:
            console.log({action, state});
            const oldAnswers = state.gameState?.answers || [];
            const oldAnswer = oldAnswers.find(a => a.id === payload.id);
            let answers: any[] = [];

            if (oldAnswer) {
                answers = oldAnswers.map(a => {
                    if (a.id === payload.id) {
                        a.value = payload.value
                    }

                    return a;
                })
            } else {
                answers = [
                    ...oldAnswers,
                    {
                        id: payload.id,
                        value: payload.value
                    }
                ]
            }

            return {
                ...state,
                gameState: {
                    ...state.gameState!,
                    answers
                }
            }

    }

    return state;
}
