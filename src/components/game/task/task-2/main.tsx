import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {
    return <Box>
        <p>jakiś quest dla ciebie</p>
        <button onClick={onComplete}>Zrobione!</button>
    </Box>
}
