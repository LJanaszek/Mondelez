import Box from "../../../layout/box/box"
import OrderQuestionLayout from "../../../order-question-widget"

type Props = {
    onNext(): void
}


export default function Page23({onNext}: Props) {
    return <Box>
        <OrderQuestionLayout
        items={[
            {correctPlace: 6, text: "Wysoki wynik egzaminu kończącego szkołę podstawową.",},
            {correctPlace: 5, text: "Rozwijanie pasji/hobby.",},
            {correctPlace: 4, text: "Komfort psychiczny.",},
            {correctPlace: 3, text: "Akceptacja i uznanie kolegów i koleżanek.",},
            {correctPlace: 2, text: "Wypoczynek.",},
            {correctPlace: 1, text: "Rozrywka.",},
            {correctPlace: 0, text: "Poczucie niezależności.",}
        ]}
        onComplete={() => {console.log('X    SUPER!!!!')}}
    />
        <button onClick={onNext}>Dalej</button>
        </Box>

        
}

