import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <p>Doszedłeś do punktu geo 1, gratki</p>
        <QuizQuestion id='1'></QuizQuestion>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
