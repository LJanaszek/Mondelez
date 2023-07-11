import Box from "../../../../components/layout/box/box"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>Doszedłeś do punktu geo 1, gratki</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
