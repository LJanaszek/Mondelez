import { useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import OrderQuestionLayout from "../../../order-question-widget"
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
type Props = {
    onNext(): void
}


export default function Page23({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>bla bla bla</h1>
            <p>Co zrobić jeśli widzisz wypadek, Ułóż w kolejności</p>
        </div>
        <OrderQuestionLayout
        items={[
            {correctPlace: 1, text: "Wysoki wynik egzaminu kończącego szkołę podstawową.",},
            {correctPlace: 0, text: "Rozwijanie pasji/hobby.",},
            {correctPlace: 2, text: "Komfort psychiczny.",},
            {correctPlace: 3, text: "Akceptacja i uznanie kolegów i koleżanek.",},
            {correctPlace: 4, text: "Wypoczynek.",},
            {correctPlace: 5, text: "Poczucie niezależności.",}
        ]}
        onComplete={() => setShowNext(true)}/>
        {showNext && <div className={styles.section2}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></div>}
        </BoxTask>

        
}

