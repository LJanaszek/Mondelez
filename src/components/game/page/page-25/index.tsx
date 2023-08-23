import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup"
import BoxTask from "../../../layout/boxTask/box"
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import car from "../../../../assets/list.png"
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";

type Props = {
    onNext(): void
}

export default function Page25({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>pocztówka</h1>
            <p>W trakcie trwania gry wykonajcie zdjęcie przedstawiające wasz samochód z rozłożonym hakiem w miejscu atrakcyjnym turystycznie lub przyrodniczo, zdjęcie zaprezentujcie osobie prowadzącej grę, na punkcie finałowym
            </p>
            <img src={car} alt="" />
        <section className={styles.section2}><ButtonLike> <button onClick={()=>setShowPopup(true)}>Zakończ zadanie</button></ButtonLike></section>
        </div>
        {showPopup && <Popup>
            <p className={styles.popupTheme}>Czy napewno chcesz zamknąć zadanie? </p>
            <ButtonsRow className={styles.popupNav}>
            
            <ButtonLike><button onClick={()=>{setShowPopup(false)}}>Wróć do zadania</button>
            </ButtonLike><ButtonLike><button onClick={onNext}>Zakończ</button></ButtonLike>
            </ButtonsRow>
        </Popup>
        }
    </BoxTask>
}
