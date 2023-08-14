import Box from "../../components/layout/box/box";
import { getRulesPageRoute, getGamePageRoute } from "../routes";
import style from './homePageView.module.scss';
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { Link } from "react-router-dom";
import { PageFooter } from "../../components/layout/footer/page-footer";

export default function HomePage() {

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);
    return <div className={style.homePageView}>
        <div className={style.pageHeader}>
            <h1 className={style.headerTitle}>Safety Master</h1><br />
            <p>Terenowe Mistrzostwa Śiwadomych Kierowców</p>
        </div>
        
            <div className={style.content}>
            <h2>Witamy!</h2>
            {/* <Timer></Timer> */}
            <p className={style.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus aliquid veniam facilis eum voluptate ex dolor in harum, veritatis vitae? Id dicta dolores rem eum? Quasi nobis autem a.</p>
            </div>
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
        <PageFooter />
    </div>
}
