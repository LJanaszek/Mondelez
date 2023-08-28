import Box from "../../components/layout/boxTask/box";
// import styles from "../../components/layout/boxTask/box.module.scss"
import { QuizQuestion } from "../../modules/game/questions/quiz-questions";
import { getQuizTwo } from "../routes";
import style from "./style.module.scss"
export default function QuizOne(){
    return <Box>
        <div className={style.mainDiv}>
        <QuizQuestion id="14" showPopup ={false}/>
        </div>
    </Box>
}