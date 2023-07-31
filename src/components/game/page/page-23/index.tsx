import { useState } from "react";
import Box from "../../../layout/box/box"
import OrderQuestionLayout from "../../../order-question-widget"

type Props = {
    onNext(): void
}


export default function Page23({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <OrderQuestionLayout
        items={[
            {correctPlace: 1, text: "Wysoki wynik egzaminu kończącego szkołę podstawową.",},
            {correctPlace: 0, text: "Rozwijanie pasji/hobby.",},
            {correctPlace: 2, text: "Komfort psychiczny.",},
            {correctPlace: 3, text: "Akceptacja i uznanie kolegów i koleżanek.",},
            {correctPlace: 4, text: "Wypoczynek.",},
            {correctPlace: 6, text: "Rozrywka.",},
            {correctPlace: 5, text: "Poczucie niezależności.",}
        ]}
        onComplete={() => setShowNext(true)}/>
        {showNext && <button onClick={onNext}>Dalej</button>}
        </Box>

        
}

