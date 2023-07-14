import { useQuestion } from "./use-question";
import { IQuizQuestion, QUESTIONS } from "./quest-base";
import styles from "./style.module.css";
import { ButtonLike } from "../../../atoms/button-like";


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

  export interface ForQuizQuest{
    question: IQuizQuestion
  }
  export function QuizQuestionDummy({question}:ForQuizQuest, ){
    // const {answers} = question
    return <div className={styles.question}>
          <h1>{question.text}</h1>
            <img src={question.imgSrc} alt="" className={styles.img_question}/>
            <form className={styles.answer_block}>
            {question.answers.map(a => {
                            return <div key={a.id}>
                              
                              <label>
                                <input type="radio" name="an" value={a.id}/>
                                <div className={styles.ans}>
                                  <span>{a.id}</span>
                                  {a.text}
                                </div>
                              </label>
                              
                            </div>
                        })}
                        </form>
        <ButtonLike>
          <a href="#" className={styles.next}>dalej</a>
        </ButtonLike>
        </div>
  }