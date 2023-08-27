import { Link, useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import { Popup } from "../../molecules/popup/popup";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { PageHeader } from "../../components/layout/header/page-header";
import {getTaskZero} from "../routes";


export default function RulesPage() {

    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    return <div className={styles.rulesPageView}><Box>
        <div className={styles.rules}>
            <h2 >Zasady</h2>
        </div>
        <ol>
            <li>Macie 2 godziny</li>
            <li>Przed Wami do zrobienia XX zadań</li>
            <li>Każde zadanie poprzedza pytanie</li>
            <li>Zdobywacie punkty za: 
                <ul>
                    <li>poprawne odpowiedzi</li>
                    <li>poprawne zrobienie zadań</li>
                    <li>ekonomiczną i bezpieczną jazdę - będziemy zczytywać Wasze dane z XXX</li>
                </ul>
            </li>
            <li>Sami wyznaczacie sobie trasę.</li>
            <li>Zadania odpalają się dopiero po dojechaniu w odpowiednie miejsca</li>
        </ol>

        <ButtonsRow as="nav" align="center" className={styles.buttons} >
            <ButtonLike>
                <Link className="button" to={getTaskZero()}>Dalej</Link>
            </ButtonLike>
        </ButtonsRow>


        {/* {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>} */}
    </Box>
    </div>

}
