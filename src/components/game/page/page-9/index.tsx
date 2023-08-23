import { useState } from "react";
import CheckboxAnswerForm from "../../../checkboxAnswerFormSOS/checkboxAnswerForm";
import BoxTask from "../../../layout/boxTask/box"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";

type Props = {
    onNext(): void
}

export default function Page9({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState(false)
    const [showPopupFalse, setShowPopupFalse] = useState(false)
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Przycisk SOS</h1>
            <p>wybierz wszystkie sytuacje, w których należy użyć przycisku.</p>
            <CheckboxAnswerForm
                items={[
                    { id: '1', text: 'teraz', isCorrect: true },
                    { id: '2', text: 'random text', isCorrect: false },
                    { id: '3', text: 'kiedyś', isCorrect: false },
                    { id: '4', text: 'gdy masz dość', isCorrect: false },
                    { id: '5', text: 'gdy masz dość', isCorrect: false },
                    { id: '6', text: 'gdy masz dość', isCorrect: false },
                ]}
                onComplete={() => (setShowPopup(true))}
                onInComplete={() => { setShowPopupFalse(true) }}
            />
       
        {showPopup && <Popup>
            <p className={styles.popupTheme}>Gratulacje</p>

            <ButtonLike><button onClick={onNext}>Dalej</button></ButtonLike>
        </Popup>
        }
        {showPopupFalse && <Popup>
            <p className={styles.popupTheme}>źle</p>
            <ButtonLike><button onClick={() => { setShowPopupFalse(false) }}>POPRAW ODPOWIEDŹ</button></ButtonLike>
        </Popup>
        } 
        </div>
    </BoxTask>
}
