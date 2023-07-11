import Box from "../../../../components/layout/box/box"

type Props = {
    onComplete(): void
}

export default function TaskIntro({onComplete}: Props) {
    return <Box>
        <p>serio chcesz jakieś wprowadzenie?</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
