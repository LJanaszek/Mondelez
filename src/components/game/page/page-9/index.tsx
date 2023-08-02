import { useState } from "react";
import CheckboxAnswerForm from "../../../checkboxAnswerFormSOS/checkboxAnswerForm";
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page9({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <p>kiedy należy użyć sygnału SOS?</p>
<CheckboxAnswerForm 
items = {[
    {id: '1', text:'teraz'},
    {id: '1', text: 'random text'},
    {id: '1', text:'kiedyś'},
    {id: '1', text:'gdy masz dość'},
]} 
onComplete={()=>(setShowNext(true))}/>
{showNext && <button onClick={onNext}>Dalej</button>}
</Box>
}
