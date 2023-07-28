import Box from "../../../layout/box/box"
import OrderQuestionLayout from "../../../order-question-widget"

type Props = {
    onNext(): void
}


export default function Page23({onNext}: Props) {
    return <Box>
        <OrderQuestionLayout
        items={[
            "Wysoki wynik egzaminu kończącego szkołę podstawową.",
            "Rozwijanie pasji/hobby.",
            "Komfort psychiczny.",
            "Akceptacja i uznanie kolegów i koleżanek.",
            "Wypoczynek.",
            "Rozrywka.",
            "Poczucie niezależności.",
        ]}
    />
        <button onClick={onNext}>Dalej</button>
        </Box>

        
}

