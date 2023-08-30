import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup"
import BoxTask from "../../../layout/boxTask/box"
import style from "../../../layout/boxTask/box.module.scss"
import styles from "./quizTask.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import car from "../../../../assets/list.png"
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions";
import book from "../../../../assets/book.png"

type Props = {
    onNext(): void
}

export default function Page25({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);
    // const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.answer}>
            <div className={style.mainDiv}>
                <h1>Zadanie z antyradarem</h1>
                <p>Skorzystajcie ponownie z antyradaru  RST. Odnajdźcie, który dział, rozdział, oddział, artykuł, punkt, określa zasady zachowania się kierującego pojazdem wobec pieszego wchodzącego na przejście dla pieszych?</p>
            </div>
            <div className={styles.questionAnswer}>
                <form className={styles.answer_block}>
                    <div className={styles.answerGrid}>
                        <label>

                            <div className={styles.ans}>
                                <span><input
                                    type="radio"
                                    value=""
                                    name="ans"
                                /></span>
                                <p>I, 4, 2, 34, 3
                                </p>
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
                                <p> II, 3, 7, 26, 1</p>
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
                                <p> II, 2, 13, 1
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
                                <p>I, 6, 7, 23,1</p>
                            </div>
                        </label>
                    </div>

                </form>
                <div>
                    <img src={book} alt="" />
                </div>
            </div>
            {showNext && <section className={styles.section}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike>
            </section>}
        </div>

    </BoxTask>

}
