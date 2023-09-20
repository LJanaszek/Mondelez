import { QuizAnswerDummy, QuizQuestion } from "../../modules/game/questions/quiz-questions";
import BoxTask from "../../components/layout/box/box"
import { ButtonLike } from "../../atoms/button-like";
import { Link } from "react-router-dom";
import { getQuizOne } from "../routes";
import styles from "../../components/layout/box/box.module.scss"
import style from "./style.module.scss"

export default function TaskZero() {
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Antyradar RST</h1>

            <p>Bardzo zależy nam na Waszym bezpieczeństwie. Nie chcemy też żeby kierowca Waszego zespołu dostał mandat i punkty karne. Dlatego każdy samochód, biorący w udział w zawodach Safety Master, wyposażyliśmy w ANTYRADAR RST. <br />OTRZYMALIŚCIE GO PRZED CHWILĄ NA SPOTKANIU, W KOPERCIE.<br /> Rozpakujcie go teraz i przeczytajcie na głos instrukcję obsługi, którą znajdziecie na stronie 7.
                <br />
                Powodzenia!
            </p>

            <section className={styles.butttonLike}>
                <ButtonLike>
                    <Link className={style.button} to={getQuizOne()}>Dalej</Link>
                </ButtonLike>
            </section>
        </div>
    </BoxTask>
}