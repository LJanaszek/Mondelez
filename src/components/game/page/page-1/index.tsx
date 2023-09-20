import { ButtonLike } from "../../../../atoms/button-like"
import BoxTask from "../../../layout/boxTask/box"
import styles from "../../../layout/boxTask/box.module.scss"
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { getGamePageRoute } from "../../../../routes/routes";
type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);
    return <BoxTask>
    <div className={styles.mainDiv}>
    <h1>Antyradar RST</h1>
    <p> Bardzo zależy nam na Waszym bezpieczeństwie. Nie chcemy też żeby kierowca Waszego zespołu dostał mandat i punkty karne. Dlatego każdy samochód, biorący w udział w zawodach Safety Master, wyposażyliśmy w ANTYRADAR RST. <br />OTRZYMALIŚCIE GO, W KOPERCIE, PRZED CHWILĄ NA SPOTKANIU. Rozpakujcie go teraz i przeczytajcie na głos jego instrukcję obsługi, którą znajdziecie na stronie 7. Powodzenia!
    </p>
    <section className={styles.butttonLike}>
    <ButtonLike>
    <button onClick={() => { setShowGPSInfo(true) }}>Dalej</button>
    </ButtonLike>
    </section>
    </div>

</BoxTask>
}
