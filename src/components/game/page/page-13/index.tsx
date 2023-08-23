import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import howBig from "../../../../assets/howBig.png"
import { ButtonLike } from "../../../../atoms/button-like";
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";

type Props = {
    onNext(): void
}

export default function Page13({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Jak duże masz?</h1>
            <p>Jak duże masz? - oszacuj i zapamiętaj  jak duże są obiekty bezpieczeństwa w twoim pojeździe: gaśnica, trójkąt i kamizelka.
                po zadaniu: sprawdź datę ważności gaśnicy i włóż kamizelkę w drzwi kierowcy
            </p>
            <div>
                <img src={howBig} alt="" className={styles.imgBlock}/>
            </div>
            <section className={styles.section}><ButtonLike> <button onClick={()=>setShowPopup(true)}>Zakończ zadanie</button></ButtonLike></section>
            {showPopup && <Popup>
            <p className={styles.popupTheme}>Czy napewno chcesz zamknąć zadanie? </p>
            <ButtonsRow className={styles.popupNav}>
            
            <ButtonLike><button onClick={()=>{setShowPopup(false)}}>Wróć do zadania</button>
            </ButtonLike><ButtonLike><button onClick={onNext}>Zakończ</button></ButtonLike>
            </ButtonsRow>
        </Popup>
        }
        </div>
    </BoxTask>
}
