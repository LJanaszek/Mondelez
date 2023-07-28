import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page21({onNext}: Props) {
    return <Box>
        <p>znajdź różnicę</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
