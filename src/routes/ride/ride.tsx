import { useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import { Popup } from "../../molecules/popup/popup";
import Box from "../../components/layout/box/box";
import styles from '../../components/layout/box/box.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";

export default function RidePage() {
    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);


    return <Box>
        <div className={styles.mainDiv}>
            <h1 >A teraz w drogę</h1>

            <p>Jedźcie bezpiecznie, stosujcie się do przepisów ruchu drogowego. Na całość gry macie 2h.
                <br />
                Wasz sprzęt nie pozwala na połączenie aplikacji z nawigacją. Kopiujcie współrzędne do map googla - one wskażą Wam dokładne miejsce na mapie.
                

            </p>

            <section>
                <ButtonsRow as="nav" align="center" className={styles.buttons} >
                    <ButtonLike>
                        <button className="button" onClick={() => { setShowGPSInfo(true) }}>Dalej</button>
                    </ButtonLike>
                </ButtonsRow>
            </section>
        </div>
        {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
            Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udzielcie dostępu, jeśli zostaniecie o to poproszeni.
            </p>
        </Popup>}
    </Box>


}
