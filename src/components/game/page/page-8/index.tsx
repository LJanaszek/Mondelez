import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>coś z tekstem 8 strony</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
