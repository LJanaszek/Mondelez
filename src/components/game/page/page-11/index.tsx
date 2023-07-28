import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page11({onNext}: Props) {
    return <Box>
        <p>Zadanie: Apteczka - przeprowadźcie inwentaryzację niezbędnych elementów składowych apteczki i zaznaczcie na liście online, które rzeczy w niej są i czy czegoś brakuje
Rękawiczki jednorazowe (2-3 pary)
Plastry z opatrunkiem w kilku rozmiarach
Opaska elastyczna (4m x 6cm) 
Opaska elastyczna (4m x 8cm)
Kompres gazowy
Gaza opatrunkowa 
Plaster
Nożyczki 
Chusta trójkątna
Gaziki do dezynfekcji 
bandaż zwykły
bandaż elastyczny
maska/ustnik do oddechów ratowniczych
folia NRC
Instrukcja udzielania pierwszej pomocy
Maska ochronna 3 warstwowa 
</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
