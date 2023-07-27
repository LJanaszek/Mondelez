import { element, string } from "prop-types"
import { GAME_MODULE_ACTION, useGameModuleState } from "../../../../modules/game"
import { useGameState } from "../../../../modules/game/hooks/use-game-state"
import { QUESTIONS } from "../../../../modules/game/questions/quest-base"
import { QuizAnswerDummy, QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import { SCENARIO } from "../../../../modules/game/scenario"
import { GAME_STEP_TYPE } from "../../../../modules/game/types"
import { GEO_MODULE_ACTION } from "../../../../modules/geo/provider"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function SummaryPage({onNext}: Props) {

    //szukanie zaliczonych punktów geo
    const {completedSteps} = useGameState()
    const GEO_STEP = GAME_STEP_TYPE.GEO_STEP;
    const type = SCENARIO.steps
    const GeoStepsList = type
        .filter(step=>step.type===GEO_STEP)
        .filter(step=>completedSteps.includes(step.id))
    const MaximumGeoSteps = type
        .filter(step=>step.type===GEO_STEP)

    //szukanie ilości poprawnych odpowiedzi quizowych

    //odpowiedzi usera
    const {answers} = useGameState()
    const userAnswersId = 
    [{
        id: string,
        value: string,
}]
    answers.forEach(element =>{
        var userAnswersId = (element.id, element.value)
    })
    
    //poprawne odpowiedzi
    const allQuestions = QUESTIONS
    const correctQuizAnswers = allQuestions.map(x=>x.answers)
    const correctQuizAnswersID: string[] = []
    correctQuizAnswers.forEach(element => {
        for(let i=0; i<element.length; i++){
        // console.log(element[i].id);
        if(element[i].isCorrect ){
            correctQuizAnswersID.push(element[i].id)}
    }
    });
    

    console.log(userAnswersId, '==========================')


    return <Box>
        <p>podsumowanie</p>
        <p>znalazłeś {GeoStepsList.length} punkty geo na {MaximumGeoSteps.length}</p>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
