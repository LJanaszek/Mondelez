import { useState } from "react";
import CheckboxAnswerForm from "../../../checkboxAnswerFormSOS/checkboxAnswerForm";
import Box from "../../../layout/box/box"
import { Popup } from "../../../../molecules/popup/popup";

type Props = {
    onNext(): void
}

export default function Page9({onNext}: Props) {
    const [showPopup, setShowPopup] = useState(false)
    const [showPopupFalse, setShowPopupFalse] = useState(false)
    return <Box>
        <p>kiedy należy użyć sygnału SOS?</p>
<CheckboxAnswerForm 
items = {[
    {id: '1', text:'teraz', isCorrect: true},
    {id: '2', text: 'random text', isCorrect: false},
    {id: '3', text:'kiedyś', isCorrect:false},
    {id: '4', text:'gdy masz dość', isCorrect: false},
]} 
onComplete={()=>(setShowPopup(true))}
onInComplete={()=>{setShowPopupFalse(true)}}
/>
{showPopup && <Popup>
            <p>idziemy dalej?</p>
            <button onClick={onNext}>Tak</button>
            <button onClick={()=>{setShowPopup(false)}}>POPRAW ODPOWIEDŹ</button>
        </Popup>
        }
{showPopupFalse && <Popup>
            <p>źle</p>
            <button onClick={()=>{setShowPopupFalse(false)}}>POPRAW ODPOWIEDŹ</button>
        </Popup>
        }
</Box>
}
