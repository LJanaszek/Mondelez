import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page15({onNext}: Props) {
    return <Box>
        <p>quiz</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
