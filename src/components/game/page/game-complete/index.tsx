import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function GameComplete({onNext}: Props) {
    return <Box>
        <p>brawo, skończyłeś wszystkie punkty</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
