import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import howBig from "../../../../assets/howBig.png"
import { ButtonLike } from "../../../../atoms/button-like";
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";
import style from "./style.module.scss"
type Props = {
    onNext(): void
}

export default function Page13({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Agenci specjalni</h1>
            <p>Zróbcie zdjęcia przedstawiające:
            <ul>
                <li>kierowcę w kamizelce odblaskowej,</li>
                <li>rozłożony i złożony trójkąt ostrzegawczy,</li>
                <li>datę ważności gaśnicy</li>
            </ul>
            oraz <b>zdjęcie w stylistyce Jamesa Bonda </b> na którym widoczne będą wszystkie trzy elementy. Zdjęcia przedstawcie osobie prowadzącej grę na punkcie finałowym, a wszystkie rekwizyty schowajcie w odpowiednich miejscach w samochodzie.
            </p>
            <div className={style.images}>
                <img src={howBig} alt="" id={style.imgBlock} />
            </div>
            <section className={styles.section}><ButtonLike> <button onClick={() => setShowPopup(true)}>Zakończ zadanie</button></ButtonLike></section>
            {showPopup && <Popup>
                <p className={styles.popupTheme}>Czy napewno chcesz zamknąć zadanie? </p>
                <ButtonsRow className={styles.popupNav}>

                    <ButtonLike><button onClick={() => { setShowPopup(false) }}>Wróć do zadania</button>
                    </ButtonLike><ButtonLike><button onClick={onNext}>Zakończ</button></ButtonLike>
                </ButtonsRow>
            </Popup>
            }
        </div>
    </BoxTask>
}
