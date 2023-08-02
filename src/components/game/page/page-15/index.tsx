import { useState } from "react";
import { QuizQuestionTask } from "../../../../modules/game/questions/quiz-question-task"
import Box from "../../../layout/box/box"
import styles from "./quizTask.module.css"
type Props = {
    onNext(): void
}

export default function Page15({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
        <QuizQuestionTask id="zadanieQuiz" onComplete={() => {setShowNext(true)}}></QuizQuestionTask>
        {showNext &&<button onClick={onNext} id="buttonNext" className={styles.buttonNext}>Dalej</button>}
    </Box>
}
