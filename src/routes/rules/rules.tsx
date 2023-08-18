import { useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import { Popup } from "../../molecules/popup/popup";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { PageHeader } from "../../components/layout/header/page-header";


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
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id iusto facilis eius nemo ipsum debitis, suscipit architecto error repellat eveniet </li>
        </ol>

        <ButtonsRow as="nav" align="center" className={styles.buttons} >
            <ButtonLike>
                <button onClick={() => { setShowGPSInfo(true) }}>Zaczynamy</button>
            </ButtonLike>
        </ButtonsRow>


        {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}
    </Box>
    </div>

}
