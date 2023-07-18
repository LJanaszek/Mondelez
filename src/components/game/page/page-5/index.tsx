import Box from "../../../layout/box/box"
import OrderQuestionLayout from "./order-question-layout.tsx"

type Props = {
    onNext(): void
}


export default function Page5({onNext}: Props) {
    return <Box>
        <OrderQuestionLayout
        previous={""}
        next={""}
        questionId='m-2-2'
        instruction="Jak myślisz, co powinno być najważniejsze dla Krysi w tym roku? Ustaw wartości od najważniejszej do najmniej istotnej."
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

