import { useCallback, useState } from "react";
import Box from "../../../layout/box/box"
import OrderQuestionLayoutWIthImg from "../../../order-question-widget-for-img"
import { Popup } from "../../../../molecules/popup/popup";

type Props = {
    onNext(): void
}


export default function Page5({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setShowIncor(false)
    }, [setShowPopup]);
    const [showNext, setShowNext] = useState(false);
    const [showOnIncor, setShowIncor] = useState(false);
    return <Box>
        <OrderQuestionLayoutWIthImg
        items={[
            {correctPlace: 0, text: "http://placekitten.com/200/100",},
            {correctPlace: 2, text: "http://placekitten.com/201/100",},
            {correctPlace: 1, text: "http://placekitten.com/200/102",},
        ]}
        onComplete={() => {setShowNext(true)}}
        onInComplete={()=>{setShowIncor(true); setShowPopup(true)}}
    />
        {showNext&&<Popup>
            <p>BRAWO</p>
            <button onClick={onNext}>DALEJ</button>
        </Popup>}
        {showOnIncor && showPopup && <Popup><p>ŹLE</p>
        <button onClick={onClosePopupClicked}>DALEJ</button>
        </Popup>}
        </Box>

        
}

