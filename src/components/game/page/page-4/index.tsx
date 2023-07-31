import { IMAGES, ImagesBase } from "../../../../modules/game/images/images-base"
import Box from "../../../layout/box/box"
import styles from "../style.module.css"

type Props = {
    onNext(): void
}
export interface ForImg{
    images:ImagesBase
} 
export default function Page4({onNext}: Props, {images}:ForImg,) {
    return <Box>
        <p>zadanie 1</p>
        <p>Zepsuło się koło - zrób foto poradnik pokazujący krok po kroku wyjęcie, sprawdzenie i odłożenie dojazdówki i sprzętów potrzebnych do wymiany koła - do pokazania z telefonu na finale
</p>


        <button onClick={onNext}>Dalej</button>
        
    </Box>
}
