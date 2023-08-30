import { useRef, useState } from "react";
import { QuizQuestionTask } from "../../../../modules/game/questions/quiz-question-task"
import BoxTask from "../../../layout/boxTask/box"
import styles from "./quizTask.module.scss"
import style from "../../../layout/boxTask/box.module.scss"
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
      <div className={style.mainDiv}>
        <h1>Oszczędzanie</h1>
        <p> W trakcie jazdy po mieście włączony system start-stop ogranicza zużycie paliwa od 5% do nawet 15%. Obliczcie ile złotych w skali roku może zaoszczędzić osoba, która:</p>
      </div>
      <div className={styles.questionAnswer}>
        <div className={styles.leftSide}>
          <ul>
            <li>przejeżdża 2500 km miesięcznie po mieście.</li>
            <li>Przyjmijcie średnią cenę benzyny - 6,50 zł za litr</li>
            <li>spalanie (bez systemu start-stop) na poziomie 8 litrów/100 km.</li>
          </ul>
        </div>
        <form className={styles.answer_block}>
          <div className={styles.answerGrid}>
            <label>

              <div className={styles.ans}>
                <span><input
                  type="radio"
                  value=""
                  name="ans"
                /></span>
                <p>między 1323 zł a 2015 zł
</p>
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
                <p>między 215 zł a 630 zł
</p>
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
                <p>między 585 zł a 1755 zł</p>
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
                <p>między 780 zł a 2340 zł</p>
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
