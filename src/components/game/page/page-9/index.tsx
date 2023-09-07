import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";
import aparat from "../../../../assets/aparat.png"

type Props = {
    onNext(): void
}

export default function Page9({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState(false)
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Uważaj!</h1>
            <p>W trakcie gry zróbcie zdjęcie w czasie jazdy na którym widać miejsce/sytuację potencjalnie niebezpieczną. Nie prowokujcie sami niebezpiecznych sytuacji. Przedstawcie je na punkcie finałowym i uzasadnijcie na czym polega potencjalne niebezpieczeństwo.</p>
            <img src={aparat} alt=""/>
            <section className={styles.butttonLike}>
                <ButtonLike>
                    <button onClick={() => { setShowPopup(true) }}>Zakończ zadanie</button>
                </ButtonLike>
            </section>
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
