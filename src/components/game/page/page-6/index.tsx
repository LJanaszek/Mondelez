import { useState } from "react"
import Box from "../../../layout/box/box"
import PageLayout from "../../../page-layout"
import Page92Widget2 from "./widget-2"

type Props = {
    onNext(): void
}

export default function Page6({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <PageLayout>
        <p>Zaznaczcie wspólnie, co myśli nastolatek słysząc wskazane poniżej zdania wypowiedziane przez rodziców. Do każdego zdania pasuje 1 interpretacja.</p>
        <Page92Widget2
            itemDescriptions={[
                {nameId: 'n1', id: 'd1', text: "zestaw elementów zapewniający sterowanie elementami, które mają na celu doprowadzenie ładunku do cylindra silnika tłokowego oraz usunięcie z niego wypracowanych gazów "},
                {nameId: 'n2', id: 'd2', text: "prądnica prądu przemiennego, często trójfazowa. Służy do zmiany energii mechanicznej w prąd przemienny."},
                {nameId: 'n3', id: 'd3', text: "element lub zestaw elementów elektronicznych służący do zamiany napięcia przemiennego na napięcie jednego znaku, które po dalszym odfiltrowaniu może być zmienione na napięcie stałe."},
            ]}
            itemNames={[
                {id: 'n1', text: "Układ rozrządu silnika tłokowego",},
                {id: 'n2', text: "Alternator  ",},
                {id: 'n3', text: "Prostownik"},
            ]}
            onComplete={() => setShowNext(true)}
        />
        <div style={{height: '10em'}}></div>
    </PageLayout>
        {showNext && <button onClick={onNext}>Dalej</button>}
    </Box>
}
