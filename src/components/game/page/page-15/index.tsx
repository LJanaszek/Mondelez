import {useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import styles from "./quizTask.module.scss"
import style from "../../../layout/boxTask/box.module.scss"
import { IQuizQuestion } from "../../../../modules/game/questions/quest-base";
import { ButtonLike } from "../../../../atoms/button-like";
import { Popup } from "../../../../molecules/popup/popup";
type Props = {
  onNext(): void
}
export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm(id: string, value: string): void;
}
export default function Page15({ onNext }: Props) {
  const [showNext, setShowNext] = useState(false);
  const [checkAns, setCheckAns] = useState(false);
  return (<BoxTask>
    <div className={styles.answer}>
      <div className={style.mainDiv}>
        <h1>Oszczędzanie</h1>
        <p>W trakcie jazdy po mieście włączony system start-stop ogranicza zużycie paliwa od 5% do nawet 15%. Obliczcie ile złotych w skali roku można zaoszczędzić jeśli:</p>
      </div>
      <div className={styles.questionAnswer}>
        <div className={styles.leftSide}>
          <ul>
            <li>przejeżdża się 2500 km miesięcznie po mieście,</li>
            <li>średnia cena paliwa wynosi 6,50 zł za litr,</li>
            <li>spalanie samochodu (bez systemu start-stop) jest na poziomie 8 litrów/100 km.</li>
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
                    onClick={() => { setShowNext(true) }}
                  />
                </span>
                <p>między 780 zł a 2340 zł</p>
              </div>
            </label>
          </div>

        </form>

      </div>
      <section className={styles.section}>
        <ButtonLike><button onClick={() => { setCheckAns(true); }}>SPRAWDŹ</button></ButtonLike>
      </section>
    </div>
    {showNext && checkAns && <Popup><p>BRAWO</p><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button> </ButtonLike>
    </Popup>}
    {checkAns && !showNext && <Popup><p>Spróbuj jeszcze raz</p><ButtonLike><button onClick={() => { setCheckAns(false) }}>Wróć</button> </ButtonLike>
    </Popup>}
  </BoxTask>)

}
