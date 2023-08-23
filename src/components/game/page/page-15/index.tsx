import { useRef, useState } from "react";
import { QuizQuestionTask } from "../../../../modules/game/questions/quiz-question-task"
import BoxTask from "../../../layout/boxTask/box"
import styles from "./quizTask.module.scss"
import { IQuizQuestion } from "../../../../modules/game/questions/quest-base";
import { element } from "prop-types";
import { ButtonLike } from "../../../../atoms/button-like";
type Props = {
  onNext(): void
}
export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm(id: string, value: string): void;
}
export default function Page15({ onNext }: Props) {
  const [showNext, setShowNext] = useState(false);
  return (<BoxTask>
    <div className={styles.answer}>
      <div className={styles.questionText}>
        <h1>zadanieQuizowe</h1>
        <p>pytanie</p>
      </div>
      <div className={styles.questionAnswer}>
        <img
          src='http://placekitten.com/400/300'
          alt=""
        />
        <form className={styles.answer_block}>
          <div className={styles.answerGrid}>
            <label>

              <div className={styles.ans}>
                <span><input
                  type="radio"
                  value=""
                  name="ans"
                /></span>
                <p>odp1</p>
              </div>
            </label>
          </div>
          <div className={styles.answerGrid}>
            <label>

              <div className={styles.ans}>
                <span><input
                  type="radio"
                  value=""
                  name="ans"
                /></span>
                <p>odp1</p>
              </div>
            </label>
          </div>
          <div className={styles.answerGrid}>
            <label>

              <div className={styles.ans}>
                <span><input
                  type="radio"
                  value=""
                  name="ans"
                /></span>
                <p>odp1</p>
              </div>
            </label>
          </div>
          <div className={styles.answerGrid}>
            <label>

              <div className={styles.ans}>
                <span>
                  <input
                    type="radio"
                    value=""
                    name="ans"
                    onClick={() => {
                      setShowNext(true); let a = document.querySelectorAll('input')
                      a.forEach((element) => { element.disabled = true })
                    }}
                  />
                </span>
                <p>odp1</p>
              </div>
            </label>
          </div>
        </form>
      </div>
{showNext && <section className={styles.section}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike>
    </section>}
    </div>
    
  </BoxTask>)

}
