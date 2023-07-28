import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page27({onNext}: Props) {
    return <Box>
        <p>Zadanie Znalezienie schowków, miejsc do mocowania bagaży, zamocowanie reklamówki lub
przedmiotu
</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
