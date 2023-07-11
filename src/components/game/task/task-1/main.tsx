import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {
    return <Box>
        <p>tutaj coś se zrób jakieś zadanie</p>
        <button onClick={onComplete}>Zrobione!</button>
    </Box>
}
