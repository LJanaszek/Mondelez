import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function PageTimeEnd({onNext}: Props) {
    return <Box>
        <p>koniec czasu</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
