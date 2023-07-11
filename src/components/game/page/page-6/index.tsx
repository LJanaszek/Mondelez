import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>tekst do punktu 6</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
