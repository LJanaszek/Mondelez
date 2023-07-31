import { useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import {Popup} from "../../molecules/popup/popup";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";


export default function RulesPage() {

    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    return <div className={styles.rules}>
        <Box>
            <h2>Instrukcja</h2>

            <ul>
                <li>Do wzięcia udziału w rozgrywce potrzebujesz smartfona lub tablet z dostępem do Internetu.</li>
                <li>Gra wykorzystuje aparat i lokalizację urządzenia. Aby zagrać, udziel zgody, gdy zostaniesz zapytany/zapytana o udzielenie dostępu.</li>
                <li>Początek gry znajduje się przy tzw. „Kapliczce Godebskiego" mieszczącej się pod adresem Cypriana Godebskiego 19 w Raszynie.</li>
                <li>Gra jest przeznaczona dla zespołów, ale można wziąć w niej udział pojedynczo.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                <li>Przemieszczając się pomiędzy kolejnymi miejscami – zachowaj ostrożność.</li>
                <li>Gdy w zadaniach zobaczysz ikonę ? – kliknij, aby przeczytać treść pomocy.</li>
            </ul>

            <ButtonsRow as="nav">
                <ButtonLike>
                <button onClick={() => { setShowGPSInfo(true) }}>Dalej</button>
                </ButtonLike>
            </ButtonsRow>
        </Box>

        {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}

    </div>
}
