import { useState } from "react";
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page8({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestion id='3' onComplete={() => setShowNext(true)} onNext={onNext}></QuizQuestion>
    </Box>
}
