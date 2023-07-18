import { useQuestion } from "./use-question";
import { IQuizQuestion, QUESTIONS } from "./quest-base";
import styles from "./style.module.css";
import { ButtonLike } from "../../../atoms/button-like";


export interface Props {
    id: string,
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
  export function QuizQuestionDummy({question}:ForQuizQuest){
    // const {answers} = question
    return <div className={styles.question}>
          <h1>{question.text}</h1>
            <img src={question.imgSrc} alt="" className={styles.img_question}/>
            <form className={styles.answer_block}>
            {question.answers.map(a => {
                            if(a.isCorrect==true){
                                return <div key={a.id}>
                                <label>
                                <input type="radio" name="an" value={a.id} onClick={afterCorrectanswer}/>
                                <div className={styles.ansCor}>
                                  <span>{a.id}</span>
                                  {a.text}
                                </div>
                              </label>

                            </div>
                            
                            } 
                            else{
                              return <div key={a.id}>
                              
                              <label>
                                <input type="radio" name="an" value={a.id} onClick={afterIncorrectanswer}/>
                                <div className={styles.ans}>
                                  <span>{a.id}</span>
                                  {a.text}
                                </div>
                              </label>
                              
                            </div>
                            }
                        })}
                        </form>
                        <div className={styles.questionAnswer} id="questionAnswer"></div>
          {/* <button onClick={onNext} className={styles.next} id="next">dalej</button> */}
        </div>
  }
const afterIncorrectanswer=(event:React.MouseEvent<HTMLElement>)=>{
  let something = document.querySelectorAll('input')
  for(let i=0; i<something.length; i++){
    something[i].disabled = true;}
    const myTry = document.getElementById("questionAnswer")!
    myTry.innerHTML = "something"
    document.getElementById("next")!.style.display = "block";
  }
const afterCorrectanswer=(event:React.MouseEvent<HTMLElement>)=>{
  let something = document.querySelectorAll('input')
  for(let i=0; i<something.length; i++){
    something[i].disabled = true;
}
  const myTry = document.getElementById("questionAnswer")!
    myTry.innerHTML = "correct"
    document.getElementById("next")!.style.display = "block";
}
