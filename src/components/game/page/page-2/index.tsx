import { useState } from "react";
import Box from "../../../../components/layout/box/box"
import { QuizAnswerDummy, QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import { Popup } from "../../../../molecules/popup/popup";
import styles from "../style.module.scss"

type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {

    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestion id='1' onComplete={() => setShowNext(true)} onNext={onNext}></QuizQuestion>
        
    </Box>
}
