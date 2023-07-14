import { useQuestion } from "./use-question";
import { IQuizQuestion } from "./quest-base";
import {styles} from "./style.css";


export interface Props {
    id: string
  }
  
  export function QuizQuestion({id}: Props) {
    const q = useQuestion(id);
    if (!q){
        return <p>brak pytania w bazie</p>
    }
    return <QuizQuestionDummy question={q} />
  }

  export interface Props2{
    question: IQuizQuestion
  }
  export function QuizQuestionDummy({question}:Props2){
    return <label>
        <input value={question.text} type="radio" />
    </label>
  }