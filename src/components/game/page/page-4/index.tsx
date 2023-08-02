import { useState } from "react"
import {ImagesBase } from "../../../../modules/game/images/images-base"
import { Popup } from "../../../../molecules/popup/popup"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}
export interface ForImg {
    images: ImagesBase
}
export default function Page4({ onNext }: Props, { images }: ForImg) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <Box>
        <p>zadanie 1</p>
        <p>Zepsuło się koło - zrób foto poradnik pokazujący krok po kroku wyjęcie, sprawdzenie i odłożenie dojazdówki i sprzętów potrzebnych do wymiany koła - do pokazania z telefonu na finale
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
