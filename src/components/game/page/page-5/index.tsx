import { useCallback, useState } from "react";
import OrderQuestionLayoutWIthImg from "../../../order-question-widget-for-img"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import BoxTask from "../.././../layout/boxTask/box"
import lights from "../../../../assets/lights.png"
import police from "../../../../assets/police.png"
import signs from "../../../../assets/signs.png"
import { ButtonLike } from "../../../../atoms/button-like";
type Props = {
    onNext(): void
}


export default function Page5({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setShowIncor(false)
    }, [setShowPopup]);
    const [showNext, setShowNext] = useState(false);
    const [showOnIncor, setShowIncor] = useState(false);
    return <BoxTask >
        <div className={styles.mainDiv}>
            <h1>Kto ważniejszy?</h1>
            <p>Na drodze możemy spotkać różne rodzaje sygnałów i znaków drogowych. Za pomocą strzałek uporządkujcie je zgodnie z hierarchią ważności - od najważniejszego do tego, który należy brać pod uwagę w ostatniej kolejności.</p>
        </div>
        <OrderQuestionLayoutWIthImg
            items={[
                { correctPlace: 1, text: lights, description: "światła" },
                { correctPlace: 2, text: signs, description: "znaki drogowe" },
                { correctPlace: 0, text: police, description: "policjant" },
            ]}
            onComplete={() => { setShowNext(true) }}
            onInComplete={() => { setShowIncor(true); setShowPopup(true) }}
        />
        {showNext && <Popup>
            <p>BRAWO</p>
            <ButtonLike>
            <button onClick={onNext}>DALEJ</button>
            </ButtonLike>
        </Popup>}
        {showOnIncor && showPopup && <Popup><p>ŹLE</p>
            <button onClick={onClosePopupClicked}>DALEJ</button>
        </Popup>}
    </BoxTask>


}

