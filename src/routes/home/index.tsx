import { getRulesPageRoute, getGamePageRoute } from "../routes";
import styles from './homePageView.module.scss';
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { Link } from "react-router-dom";
import { PageFooter } from "../../components/layout/footer/page-footer";
import Box from "../../components/layout/box/box";

export default function HomePage() {

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);

    return <div className={styles.homePageView}>
        <div className={styles.pageHeader}>
            <h1 className={styles.headerTitle}>Safety Master</h1>
            <p>Terenowe Mistrzostwa Świadomych Kierowców.</p>
        </div>

        <div className={styles.content}>
            <h2>Witajcie!</h2>
            {/* <Timer></Timer> */}
            <p className={styles.contentText}>Przed Wami szereg zadań. Rozwiążcie jak najwięcej z nich.
                Pamiętajcie by poruszać się bezpiecznie i ekonomicznie.
            </p>
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

            {gameStarted &&
                <ButtonLike>
                    <Link className="button" to={getRulesPageRoute()} onClick={onGameRestart}>Zrestartuj grę</Link>
                </ButtonLike>
            }
        </nav>
        <PageFooter />
    </div>
}
