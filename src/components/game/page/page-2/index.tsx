import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import style from '../../../../modules/game/questions/style.module.css'
type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {
    return <Box>
        <p>Doszedłeś do punktu geo 1, gratki</p>
        <QuizQuestion id='1' ></QuizQuestion>
        <button onClick={onNext} id="next" className={style.next}>Dalej</button>
    </Box>
}
