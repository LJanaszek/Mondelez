import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page25({onNext}: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <Box>
        <p>Zadanie Zrób zdjęcie
miejsca gdzie byłeś
z rozłożonym hakiem
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
