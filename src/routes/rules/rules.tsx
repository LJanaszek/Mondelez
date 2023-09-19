import { Link } from "react-router-dom";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import {getTaskZero} from "../routes";


export default function RulesPage() {

    

    return <div className={styles.rulesPageView}><Box>
        <div className={styles.rules}>
            <h2 >Zasady Gry</h2>
        </div>
        <ol>
            <li>Przed Wami 12 zadań</li>
            <li>Każde zadanie poprzedza pytanie quizowe</li>
            <li>Zdobywacie punkty za: 
                <ul>
                    <li>poprawne odpowiedzi na pytania quizowe</li>
                    <li>poprawne wykonanie zadań</li>
                    <li>ekonomiczną i bezpieczną jazdę - będziemy sczytywać Wasze dane z aplikacji Ecologic.</li>
                </ul>
            </li>
            <li>Na przejście gry macie 2 godziny - po upływie tego czasu kierujcie się od razu do punktu startowego, nawet jeśli nie udało Wam się ukończyć wszystkich zadań.</li>
            <li>Gra opiera się na geolokalizacji - aby wyświetlić zadanie musicie znaleźć się w jego pobliżu.</li>
            <li>Sami decydujecie w jakiej kolejności chcecie wykonywać zadania - nie ma z góry wyznaczonej trasy.</li>
            <li>Zadań nie musicie realizować w dokładnej lokalizacji punktu. Po otworzeniu zadania znajdźcie miejsce, w którym możecie bezpiecznie się zatrzymać.</li>
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
