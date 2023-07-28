import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page11({onNext}: Props) {
    return <Box>
        <p>apteczka checkbox</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
