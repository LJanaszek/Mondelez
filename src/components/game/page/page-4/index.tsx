import { useState } from "react"
import { ImagesBase } from "../../../../modules/game/images/images-base"
import { Popup } from "../../../../molecules/popup/popup"
import BoxTask from "../../../layout/boxTask/box"
import styles from "../../../layout/boxTask/box.module.scss"
import page4_car from "../../../../assets/page4_car.png"
import { ButtonLike } from "../../../../atoms/button-like"
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row"

type Props = {
    onNext(): void
}
export interface ForImg {
    images: ImagesBase
}
export default function Page4({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Zepsute koło</h1>
            <p> O nie! Złapaliście gumę! Stwórzcie fotoporadnik, który pozwoli nieświadomym kierowcom dowiedzieć się co i w jakiej kolejności muszą zrobić aby bezpiecznie wymienić koło.</p>
            <p>UWAGA! NIE WYMIENIAJCIE KOŁA, zróbcie tylko zdjęcia wszystkim rzeczom i narzędziom potrzebnym do bezpiecznej wymiany. Po sesji zdjęciowej umieśćcie je w odpowiednich miejscach, aby były gotowe do użycia w razie prawdziwej awarii. Wykonane zdjęcia przedstawcie osobie prowadzącej grę na punkcie finałowym.</p>
            <img src={page4_car} alt="" />
            <section className={styles.butttonLike}>
                <ButtonLike>
                    <button onClick={() => { setShowPopup(true) }}>Zakończ zadanie</button>
                </ButtonLike>
            </section>
        </div>
        {showPopup && <Popup>
            <p className={styles.popupTheme}>Czy napewno chcesz zamknąć zadanie? </p>
            <ButtonsRow className={styles.popupNav}>

                <ButtonLike><button onClick={() => { setShowPopup(false) }}>Wróć do zadania</button>
                </ButtonLike><ButtonLike><button onClick={onNext}>Zakończ</button></ButtonLike>
            </ButtonsRow>
        </Popup>
        }

    </BoxTask>
}
