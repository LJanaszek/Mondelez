import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page9({onNext}: Props) {
    return <Box>
        <p>Przycisk SOS - wybierz wszystkie sytuacje, w których należy skorzystać z przycisku</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
