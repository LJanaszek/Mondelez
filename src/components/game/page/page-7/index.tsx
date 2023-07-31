import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page7({onNext}: Props) {
    return <Box>
        <p>zademonstruj na zdjęciu prawidłowo ustawioną pozycję kierowcy za kierownicą, ma to być zdjęcie instruktażowe dla osoby, która nie wie jak zająć prawidłową pozycję za kierownicą.</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
