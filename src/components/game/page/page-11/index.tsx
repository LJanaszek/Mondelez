import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>brawo, ukończyłeś grę</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
