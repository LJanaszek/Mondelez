import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";

export default function GameErrorPage() {

    const dispatch = useGameModuleDispatch();

    return <div>
        <p>Coś jest nie tak ze stanem gry</p>
        <button onClick={() => {
            dispatch({
                type: GAME_MODULE_ACTION.RESET_GAME
            })
        }}>Zresetuj grę</button>
    </div>
}
