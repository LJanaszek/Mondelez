import { useState } from "react";
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page10({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestion id='4' onComplete={() => setShowNext(true)} onNext={onNext}></QuizQuestion>
    </Box>
}
