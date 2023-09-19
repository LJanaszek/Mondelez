import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import OrderQuestionLayout from "../../../order-question-widget"
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import { Popup } from "../../../../molecules/popup/popup";
type Props = {
    onNext(): void
}


export default function Page23({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    const [showButton, setShowButton] = useState(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Zarządzanie kryzysowe</h1>
            <p>Sprawdźcie czy wiecie jak zachować się w razie bycia świadkami wypadku drogowego. Za pomocą strzałek uporządkujcie czynności od tej którą należy wykonać jako pierwszą do tej, którą wykonujemy jako ostatnią.<br /> Będziecie mogli kontynuować grę, dopiero jak ułożycie prawidłową kolejność</p>
        </div>
        <OrderQuestionLayout
        items={[
            {correctPlace: 2, text: "Zabezpiecz miejsce zdarzenia.",},
            {correctPlace: 3, text: "Sprawdź czy są poszkodowani i oceń ich stan.",},
            {correctPlace: 7, text: "Udokumentuj przebieg zdarzenia.",},
            {correctPlace: 0, text: "Zatrzymaj się w bezpiecznym miejscu i włącz światła awaryjne.",},
            {correctPlace: 4, text: "Wezwij służby ratunkowe lub poproś o to inną osobę.",},
            {correctPlace: 6, text: "Udziel pierwszej pomocy.",},
            {correctPlace: 5, text: "Załóż rękawiczki ochronne.",},
            {correctPlace: 1, text: "Ze schowka w drzwiach kierowcy wyjmij i załóż kamizelkę odblaskową.",},
            {correctPlace: 8, text: "Poczekaj na przyjazd służb ratunkowych.",},
        ]}
        onComplete={() => setShowNext(true)}/>
        <div className={styles.section2}>
        <ButtonLike><button onClick={()=>{setShowButton(true)}}>SPRAWDŹ</button></ButtonLike>
        </div>
        {!showNext && showButton && <div className={styles.section2}><Popup><p>Spróbuj jeszcze raz</p><ButtonLike> <button onClick={()=>{setShowButton(false)}}>Wróć</button></ButtonLike></Popup></div>}
        {showNext && showButton && <div className={styles.section2}><Popup><p>BRAWO!</p><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></Popup></div>}
        </BoxTask>

        
}

