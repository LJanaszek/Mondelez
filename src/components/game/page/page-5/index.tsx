import { useCallback, useState } from "react";
import OrderQuestionLayoutWIthImg from "../../../order-question-widget-for-img"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../../../layout/boxTask/box.module.scss"
import BoxTask from "../.././../layout/boxTask/box"
import lights from "../../../../assets/lights.png"
import police from "../../../../assets/police.png"
import signs from "../../../../assets/signs.png"
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
            <h1>ułóż w kolejności</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugiat delectus nobis harum fuga ab dignissimos nulla placeat aliquam, quia quidem pariatur esse explicabo adipisci exercitationem saepe unde itaque voluptate.</p>
        </div>
        <OrderQuestionLayoutWIthImg
            items={[
                { correctPlace: 0, text: lights, description: "światła" },
                { correctPlace: 2, text: police, description: "policjant" },
                { correctPlace: 1, text: signs, description: "znaki drogowe" },
            ]}
            onComplete={() => { setShowNext(true) }}
            onInComplete={() => { setShowIncor(true); setShowPopup(true) }}
        />
        {showNext && <Popup>
            <p>BRAWO</p>
            <button onClick={onNext}>DALEJ</button>
        </Popup>}
        {showOnIncor && showPopup && <Popup><p>ŹLE</p>
            <button onClick={onClosePopupClicked}>DALEJ</button>
        </Popup>}
    </BoxTask>


}

