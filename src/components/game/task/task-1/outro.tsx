import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskOutro({onComplete}: Props) {
    return <Box>
        <p>Super zrobiłeś zadanie 1!</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
