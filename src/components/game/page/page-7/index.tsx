import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup";
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page7({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <Box>
        <p>zademonstruj na zdjęciu prawidłowo ustawioną pozycję kierowcy za kierownicą, ma to być zdjęcie instruktażowe dla osoby, która nie wie jak zająć prawidłową pozycję za kierownicą.</p>
        <button onClick={()=>{setShowPopup(true)}}>Dalej</button>
        {showPopup && <Popup>
            <p>idziemy dalej? {showPopup ? 'TRUE' : 'FALSE'}</p>
            <button onClick={onNext}>Tak</button>
            <button onClick={()=>{setShowPopup(false)}}>ZAMKNIJ</button>
        </Popup>
        }
    </Box>
}
