import Box from "../../../layout/box/box"
import OrderQuestionLayout from "../../../order-question-widget"

type Props = {
    onNext(): void
}


export default function Page5({onNext}: Props) {
    return <Box>
        <OrderQuestionLayout
        items={[
            {correctPlace: 6, text: "TO JEST STRONA 5 - Wysoki wynik egzaminu kończącego szkołę podstawową.",},
            {correctPlace: 5, text: "TO JEST STRONA 5 - Rozwijanie pasji/hobby.",},
            {correctPlace: 4, text: "TO JEST STRONA 5 - Komfort psychiczny.",},
            {correctPlace: 3, text: "TO JEST STRONA 5 - Akceptacja i uznanie kolegów i koleżanek.",},
            {correctPlace: 2, text: "TO JEST STRONA 5 - Wypoczynek.",},
            {correctPlace: 1, text: "TO JEST STRONA 5 - Rozrywka.",},
            {correctPlace: 0, text: "TO JEST STRONA 5 - Poczucie niezależności.",}
        ]}
        onComplete={() => {console.log('X    SUPER!!!!')}}
    />
        <button onClick={onNext}>Dalej</button>
        </Box>

        
}

