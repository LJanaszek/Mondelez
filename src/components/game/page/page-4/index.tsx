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
        <p>tekst z zadaniem</p>


        <button onClick={onNext}>Dalej</button>
        
    </Box>
}
