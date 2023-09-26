import { useGameState } from "../../../../modules/game/hooks/use-game-state"
import { QUESTIONS } from "../../../../modules/game/questions/quest-base"
import { GAME_STEP_TYPE } from "../../../../modules/game/types"
import Box from "../../../layout/boxFinal/box"
import useScenario from "../../../../modules/game/hooks/use-scenario"
import styles from "../../../layout/boxFinal/box.module.scss"
type Props = {
    onNext(): void
}

export default function SummaryPage({onNext}: Props) {

    const {geoPointsCount, completedGeoPointCount} = useGeoPointResult();
    const {correctQuizQuestionCount} = useQuizResult();

    return <Box>
    <div className={styles.mainDiv}>
        <h1>Gratulacje!</h1>
        
        <p>znaleźliście <span>{completedGeoPointCount} z {geoPointsCount} </span>zadań<br />
        opdowiedziałeś poprawnie na <span>{correctQuizQuestionCount} z 14 </span> pytań quizowych</p>
        
        </div>
        <p className={styles.adress}>kierujcie się do bazy: Hotel Aubrecht Country Spa Resort</p>
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