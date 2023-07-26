import { useQuestion } from "./use-question";
import { ANSWERS, IQuizQuestion, QUESTIONS } from "./quest-base";
import styles from "./style.module.css";
import { ButtonLike } from "../../../atoms/button-like";
import {
  GameState,
  MAIN_MODULE_ACTION,
  useMainModuleDispatch,
} from "../../main";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAnswer } from "../../main/hooks/use-answer";
import Q from "q";

export interface Props {
  id: string;
  onComplete?(): void
}

/**
 * Jeżeli user nie odpowiedział jeszcze na to pytanie to pokazujemy <QuizQuestionDummy>
 * Jezeli user opdpiwedział na pytanie to pokazujemy podsumowanie pytania
 */
export function QuizQuestion({ id, onComplete }: Props) {
  const q = useQuestion(id);
  const dispatch = useMainModuleDispatch();
  const answer = useAnswer(id);

  const showQuestion = Boolean(!answer);
  const showSummary = Boolean(answer);

  const onQuestionConfirm = useCallback(
    (id: string, value: string) => {
      dispatch({
        type: MAIN_MODULE_ACTION.SAVE_ANSWER,
        payload: {
          id: id,
          value: value,
        },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (onComplete && Boolean(answer)) {
      onComplete();
    }
  }, [answer, onComplete])

  if (!q) {
    return <p>brak pytania w bazie</p>;
  }

  return (
    <>
      {showQuestion && (
        <QuizQuestionDummy question={q} onConfirm={onQuestionConfirm} />
      )}
      {showSummary && <QuizAnswerDummy question={q} userAnswerId={answer} />}
    </>
  );
}

export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm(id: string, value: string): void;
}

export function QuizQuestionDummy({ question, onConfirm }: ForQuizQuest) {
  const imgRef = useRef<HTMLImageElement>(null);

  // const afterCorrectanswer = useCallback(() => {}, [question]);

  const { register, watch } = useForm();

  const value = watch("an");

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setShowConfirm(Boolean(value));
  }, [value]);

  const onConfirmClicked = useCallback(() => {
    onConfirm(question.id, value);
  }, [onConfirm, question, value]);

  // const {answers} = question
  return (
    <div className={styles.question}>
      <h1>{question.text}</h1>
      <img
        src={question.imgSrc}
        alt=""
        className={styles.img_question}
        ref={imgRef}
      />
      <form className={styles.answer_block}>
        {question.answers.map((a) => {
          return (
            <div key={a.id}>
              <label>
                <input
                  type="radio"
                  value={a.id}
                  // onClick={a.isCorrect ? afterCorrectanswer : afterIncorrectanswer}
                  {...register("an")}
                />
                <div className={a.isCorrect ? styles.ans : styles.ans}>
                  <span>{a.id}</span>
                  {a.text}
                </div>
              </label>
            </div>
          );
        })}
      </form>
      <div className={styles.questionAnswer} id="questionAnswer"></div>
      {showConfirm && (
        <button id="next" onClick={onConfirmClicked}>
          POTWIERDZ
        </button>
      )}
    </div>
  );
}

export interface QuizAnswerDummyProps {
  question: IQuizQuestion,
  userAnswerId: string
}

export function QuizAnswerDummy({question, userAnswerId}: QuizAnswerDummyProps){

  const correctQuizAnswer = question.answers.find(quizAnswer => quizAnswer.isCorrect)
  const userQuizAnswer = question.answers.find(quizAnswer => quizAnswer.id === userAnswerId)

  const userAnswerText: string = userQuizAnswer?.text || 'Błąd danych';
  const isUserAnswerCorrect: boolean = (correctQuizAnswer?.id === userQuizAnswer?.id); //tutaj ma być sprawdzenie czy user wybral poprawną odpwiedz
  const correctAnswerText: string = correctQuizAnswer?.text || 'Błąd danych'; 
  const questionDescription: string = question.description;



  return <div>
    <p>Twoja odpowiedz to: {userAnswerText}</p>

    {isUserAnswerCorrect && <p>SUPER!</p>}
    {!isUserAnswerCorrect && <div>
      <p>Poprawną odpowiedzą było: {correctAnswerText}</p>
      <p>Poniewaz: {questionDescription}</p>
    </div>}
  </div>
}

