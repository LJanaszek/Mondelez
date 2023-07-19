import { useState } from "react";
import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {

    const [showNext, setShowNext] = useState(false);

    return <Box>
        <p>Doszedłeś do punktu geo 1, gratki</p>
        <QuizQuestion id='1' onComplete={() => setShowNext(true)}></QuizQuestion>
        {showNext && <button onClick={onNext}>Dalej</button>}
    </Box>
}
