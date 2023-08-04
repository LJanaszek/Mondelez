import { useState } from "react";
import Box from "../../../layout/box/box"
import { Popup } from "../../../../molecules/popup/popup";

type Props = {
    onNext(): void
}

export default function Page27({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <Box>
        <p>Zadanie Znalezienie schowków, miejsc do mocowania bagaży, zamocowanie reklamówki lub
przedmiotu
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
