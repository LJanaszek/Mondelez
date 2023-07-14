import Box from "../../../../components/layout/box/box"
import styles from "../style.module.css"
type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>zadanie 3</p>
        <input type="text" /> wpisz cene paliwa <br />
        <button onClick={onNext}>Dalej</button>
    </Box>
}
