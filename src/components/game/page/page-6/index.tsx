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
            <h1>Stabilny tor</h1>
            <p>Dopasujcie nazwy systemów bezpieczeństwa do ich opisów. W poniższej tabeli zaznaczcie odpowiedni skrót na liście rozwijającej się obok opisu:</p>
        </div>
        <div className={styles.contentOrder}>
            <OrderQuestionWidget
                items={[
                    { correctPlace: 3, text: " system optymalizacji przyczepności podczas hamowania silnikiem. System ogranicza moment obrotowy silnika podczas redukcji biegów i zapobiega utracie przyczepności kół.", },
                    { correctPlace: 1, text: "system zapobiegający blokowaniu kół podczas hamowania. Dodatkowo utrzymuje sterowność i stabilność pojazdu w przypadku gwałtownego hamowania. ", },
                    { correctPlace: 0, text: " system zapobiegający ślizganiu się napędzanych kół z powodu śliskiej nawierzchni lub dużej mocy silnika. ", },
                    { correctPlace: 2, text: " elektroniczny rozdzielacz siły hamowania pomiędzy osią przednią a tylnią.  System ten rejestruje obciążenie osi samochodu i dostosowuje siłę hamowania poszczególnych kół w taki sposób, aby auto nie straciło przyczepności.", },
                ]}
                onComplete={() => setShowNext(true)}
            />
        
            {showNext && <div className={styles.section2}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></div>}
            </div> 
        
    </BoxTask>
}
