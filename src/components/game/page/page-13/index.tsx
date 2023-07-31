import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page13({onNext}: Props) {
    return <Box>
        <p>Jak duże masz? - oszacuj i zapamiętaj  jak duże są obiekty bezpieczeństwa w twoim pojeździe: gaśnica, trójkąt i kamizelka. 
po zadaniu: sprawdź datę ważności gaśnicy i włóż kamizelkę w drzwi kierowcy 
</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
