import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page9({onNext}: Props) {
    return <Box>
        <p>sos</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
