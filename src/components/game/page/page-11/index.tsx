import {useState } from "react";
import Box from "../../../layout/box/box"
import CheckboxAnswerForm from "../../../checkboxAnswerForm/checkboxAnswerForm";

type Props = {
    
    onNext(): void
}
export default function Page11({onNext}: Props) {
    // useContext()
    const [showNext, setShowNext] = useState(false);
        return <Box>
            <p>sprawdźcie czy macie wszystko z podanej listy w swojej apteczce w aucie</p>
    <CheckboxAnswerForm 
    items = {[
        {id: '1', text :'Rękawiczki jednorazowe (2-3 pary)'},
        {id: '1', text: 'Plastry z opatrunkiem w kilku rozmiarach'},
        {id: '1', text:'Opaska elastyczna (4m x 6cm)'},
        {id: '1', text:'Opaska elastyczna (4m x 8cm)'},
        {id: '1', text:'Kompres gazowy'},
        {id: '1', text:'Gaza opatrunkowa'},
        {id: '1', text:'Plaster'},
        {id: '1', text:'Nożyczki'},
        {id: '1', text:'Chusta trójkątna'},
        {id: '1', text:'Gaziki do dezynfekcji'},
        {id: '1', text:'bandaż zwykły'},
        {id: '1', text:'bandaż elastyczny'},
        {id: '1', text:'maska/ustnik do oddechów ratowniczych'},
        {id: '1', text:'folia NRC'},
        {id: '1', text:'Instrukcja udzielania pierwszej pomocy'},
        {id: '1', text:'Maska ochronna 3 warstwowa '}
    ]} 
    onComplete={()=>(setShowNext(true))}/>
    {showNext && <button onClick={onNext}>Dalej</button>}
    </Box>
}