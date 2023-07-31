import { useState } from "react"
import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import styles from "../style.module.css"
type Props = {
    onNext(): void
}

export default function Page3({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return <Box>
    <QuizQuestion id='2' onComplete={() => setShowNext(true)}></QuizQuestion>
    {showNext && <button onClick={onNext}>Dalej</button>}
</Box>
}
