import { useState } from "react";
import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {

    const [showNext, setShowNext] = useState(false);

    return <Box>
        <QuizQuestion id='1' onComplete={() => setShowNext(true)}></QuizQuestion>
        {showNext && <button onClick={onNext}>Dalej</button>}
    </Box>
}
