import { useState } from "react";
import Box from "../../../layout/box/box"
import { Popup } from "../../../../molecules/popup/popup";

type Props = {
    onNext(): void
}

export default function Page13({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <Box>
        <p>Jak duże masz? - oszacuj i zapamiętaj  jak duże są obiekty bezpieczeństwa w twoim pojeździe: gaśnica, trójkąt i kamizelka. 
po zadaniu: sprawdź datę ważności gaśnicy i włóż kamizelkę w drzwi kierowcy 
</p>
<button onClick={()=>{setShowPopup(true)}}>Dalej</button>
        {showPopup && <Popup>
            <p>idziemy dalej? {showPopup ? 'TRUE' : 'FALSE'}</p>
            <button onClick={onNext}>Tak</button>
            <button onClick={()=>{setShowPopup(false)}}>ZAMKNIJ</button>
        </Popup>
        }
    </Box>
}
