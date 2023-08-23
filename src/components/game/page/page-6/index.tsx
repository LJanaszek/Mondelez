import { useState } from "react"
import BoxTask from "../../../layout/boxTask/box"
import OrderQuestionWidget from "../../../order-question-widget-definition"
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"


type Props = {
    onNext(): void
}

export default function Page6({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>bla bla bla</h1>
            <p>Dopasuj nazwę do definicji</p>
        </div>
        <div className={styles.contentOrder}>
            <OrderQuestionWidget
                items={[
                    { correctPlace: 1, text: "Wysoki wynik egzaminu kończącego szkołę podstawową.", },
                    { correctPlace: 0, text: "Rozwijanie pasji/hobby.", },
                    { correctPlace: 2, text: "Komfort psychiczny.", },
                    { correctPlace: 3, text: "bl bla.", },
                ]}
                onComplete={() => setShowNext(true)}
            />
        
            {showNext && <div className={styles.section2}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></div>}
            </div> 
        
    </BoxTask>
}
