import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskIntro({onComplete}: Props) {
    return <Box>
        <p>Tutaj bedzie jakieś intro do zadania 2.</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
