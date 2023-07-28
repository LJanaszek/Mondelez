import Box from "../../../layout/box/box"
import PageLayout from "../../../page-layout"
import Page92Widget2 from "./widget-2"

type Props = {
    onNext(): void
}

export default function Page6({onNext}: Props) {
    return <Box>
        <PageLayout>
        <p>Zaznaczcie wspólnie, co myśli nastolatek słysząc wskazane poniżej zdania wypowiedziane przez rodziców. Do każdego zdania pasuje 1 interpretacja.</p>
        <Page92Widget2
            itemDescriptions={[
                "zestaw elementów zapewniający sterowanie elementami, które mają na celu doprowadzenie ładunku do cylindra silnika tłokowego oraz usunięcie z niego wypracowanych gazów ",
                "prądnica prądu przemiennego, często trójfazowa. Służy do zmiany energii mechanicznej w prąd przemienny.",
                "element lub zestaw elementów elektronicznych służący do zamiany napięcia przemiennego na napięcie jednego znaku, które po dalszym odfiltrowaniu może być zmienione na napięcie stałe."
            ]}
            itemNames={[
                "Układ rozrządu silnika tłokowego",
                "Alternator  ",
                "Prostownik"
            ]}
        />
        <div style={{height: '10em'}}></div>
    </PageLayout>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
