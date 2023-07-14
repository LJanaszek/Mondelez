import { Link } from "react-router-dom";
import Box from "../../components/layout/box/box";
import { getRulesPageRoute, getGamePageRoute } from "../routes";

import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { QuizQuestion } from "../../modules/game/questions/quiz-questions";

export default function HomePage() {

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);

    return <div>
        <Box>
            <h2>Witaj</h2>
            <p>To jest strona główna</p>
            
            <nav>
                {!gameStarted && <ButtonLike>
                    <Link to={getRulesPageRoute()}>Gra mobilna</Link>
                </ButtonLike>
                }
                {gameStarted && <ButtonLike>
                    <Link className="button" to={getGamePageRoute()}>Kontynuuj grę</Link>
                </ButtonLike>
                }
            </nav>
            {gameStarted && <ButtonsRow align="center">
                <ButtonLike>
                    <Link className="button" to={getRulesPageRoute()} onClick={onGameRestart}>Zrestartuj grę</Link>
                </ButtonLike>
            </ButtonsRow>}
        </Box>
    </div>
}
