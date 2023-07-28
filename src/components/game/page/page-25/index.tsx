import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page25({onNext}: Props) {
    return <Box>
        <p>zrób zdjęcie se</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
