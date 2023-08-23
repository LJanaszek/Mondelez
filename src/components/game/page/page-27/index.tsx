import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";
type Props = {
    onNext(): void
}

export default function Page27({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>bla bla bla</h1>
        <p>Zadanie Znalezienie schowków, miejsc do mocowania bagaży, zamocowanie reklamówki lub
        przedmiotu
        </p>
        <section>
        <ButtonLike><button onClick={()=>{setShowPopup(true)}}>Dalej</button></ButtonLike></section>
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
