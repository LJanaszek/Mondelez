import { QuizQuestionTask } from "../../../../modules/game/questions/quiz-question-task"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page15({onNext}: Props) {
    return <Box>
        <QuizQuestionTask id="zadanieQuiz"></QuizQuestionTask>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
