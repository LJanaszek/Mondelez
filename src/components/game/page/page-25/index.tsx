import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup"
import BoxTask from "../../../layout/boxTask/box"
import style from "../../../layout/boxTask/box.module.scss"
import styles from "./quizTask.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";
import book from "../../../../assets/book.png"

type Props = {
    onNext(): void
}

export default function Page25({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);
    const [checkAns, setCheckAns] = useState(false);
    // const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.answer}>
            <div className={style.mainDiv}>
                <h1>Antyradar</h1>
                <p>Skorzystajcie ponownie z antyradaru  RST. Odnajdźcie, który dział, rozdział, oddział, artykuł i punkt, określa zasady zachowania się kierującego pojazdem wobec pieszego wchodzącego na przejście dla pieszych?</p>
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
                                            setShowNext(true)}}
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
                                <p>I, 6, 7, 23, 1</p>
                            </div>
                        </label>
                    </div>

                </form>
                <div>
                    <img src={book} alt="" />
                </div>
                
            </div>
            <section className={styles.section}>
                <ButtonLike><button onClick={()=>{setCheckAns(true)}}>SPRAWDŹ</button></ButtonLike>
            </section>
            
        </div>
            {showNext && checkAns && <Popup><p>BRAWO</p><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike>
            </Popup>}
            {!showNext && checkAns && <Popup><p>Spróbuj jeszcze raz</p><ButtonLike> <button onClick={()=>{setCheckAns(false)}}>Wróć</button></ButtonLike>
            </Popup>}
    </BoxTask>

}
