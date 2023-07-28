import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page13({onNext}: Props) {
    return <Box>
        <p>jak duże masz</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
