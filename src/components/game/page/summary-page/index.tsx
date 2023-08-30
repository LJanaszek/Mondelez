import { useGameState } from "../../../../modules/game/hooks/use-game-state"
import { QUESTIONS } from "../../../../modules/game/questions/quest-base"
import { GAME_STEP_TYPE } from "../../../../modules/game/types"
import Box from "../../../layout/boxFinal/box"
import useScenario from "../../../../modules/game/hooks/use-scenario"
import styles from "../../../layout/boxFinal/box.module.scss"
import timer from "../../../../assets/endPage.png"
type Props = {
    onNext(): void
}

export default function SummaryPage({onNext}: Props) {

    const {geoPointsCount, completedGeoPointCount} = useGeoPointResult();
    const {quizQuestionCount, correctQuizQuestionCount} = useQuizResult();

    return <Box>
    <div className={styles.mainDiv}>
        <h1>Gratulacje!</h1>
        <div className={styles.timerTop}>
        <span className={styles.timer}>0:00</span>
        <img src={timer} alt="" />
        </div>
        <p>zaliczyliście <span>{completedGeoPointCount} z {geoPointsCount} </span>zadań<br />
        opdowiedziałeś poprawnie na <span>{correctQuizQuestionCount} z {quizQuestionCount} </span> pytań</p>
        
        </div>
        <p className={styles.adress}>kierujcie się do bazy: adres</p>
        </Box>
}

function useGeoPointResult() {

    //szukanie zaliczonych punktów geo

    const {completedSteps} = useGameState()
    const GEO_STEP = GAME_STEP_TYPE.GEO_STEP;
    const scenario = useScenario();
    const type = scenario.steps
    const GeoStepsList = type
        .filter(step=>step.type===GEO_STEP)
        .filter(step=>completedSteps.includes(step.id))
    const MaximumGeoSteps = type
        .filter(step=>step.type===GEO_STEP)

    return {
        geoPointsCount: MaximumGeoSteps.length,
        completedGeoPointCount: GeoStepsList.length
    }
}

function useQuizResult() {

    //odpowiedzi usera

    const {answers} = useGameState()
    
    
    //poprawne odpowiedzi
    
    const allQuestions = QUESTIONS

    const questionsWithCorrectAnswers = allQuestions.map((q) => {
        return {
            questionId: q.id,
            correctAnswer: q.answers.find(a => a.isCorrect)?.id
        }
    });

    let p = questionsWithCorrectAnswers.filter((question) => {
        const userAswer = answers.find(a => a.id === question.questionId);
        return userAswer?.value === question.correctAnswer;
    }).length;
    return {
        quizQuestionCount: answers.length,
        correctQuizQuestionCount: p
    }
}