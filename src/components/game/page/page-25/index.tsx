import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page25({onNext}: Props) {
    return <Box>
        <p>Zadanie Zrób zdjęcie
miejsca gdzie byłeś
z rozłożonym hakiem
</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
