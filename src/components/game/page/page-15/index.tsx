import { useRef, useState } from "react";
import { QuizQuestionTask } from "../../../../modules/game/questions/quiz-question-task"
import Box from "../../../layout/box/box"
import styles from "./quizTask.module.css"
import { IQuizQuestion } from "../../../../modules/game/questions/quest-base";
import { element } from "prop-types";
type Props = {
    onNext(): void
}
export interface ForQuizQuest {
    question: IQuizQuestion;
    onConfirm(id: string, value: string): void;
  }
export default function Page15({onNext}: Props) {
    const [showNext, setShowNext] = useState(false);
    return ( <Box>
        <div className={styles.question}>
          <h1>pytanie</h1>
          <img
            src='http://placekitten.com/400/300'
            alt=""
            className={styles.img_question}
          />
          <form className={styles.answer_block}>
                <div>
                  <label>
                    <input
                      type="radio"
                      value=""
                      name="ans"
                    />
                    <div className={styles.ans}>
                      <span></span>
                      odp1
                    </div>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value=""
                      name="ans"
                    />
                    <div className={styles.ans}>
                      <span></span>
                      odp2
                    </div>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value=""
                      name="ans"
                    />
                    <div className={styles.ans}>
                      <span></span>
                      odp3
                    </div>
                  </label>
                </div>
                <div>
                  <label >
                    <input
                      type="radio"
                      value=""
                      name="ans"
                      onClick={()=>{setShowNext(true); let a = document.querySelectorAll('input')
                  a.forEach((element)=>{element.disabled=true})
                }}
                    />
                    <div className={styles.ans} id={styles.correct}>
                      <span></span>
                      odp4
                    </div>
                  </label>
                </div>
          </form>
          <div className={styles.questionAnswer} id="questionAnswer"></div>
        </div>
        {showNext && <button onClick={onNext}>Dalej</button>}
         </Box>)
    
}
