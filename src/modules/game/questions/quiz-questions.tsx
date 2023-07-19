import { useQuestion } from "./use-question";
import { IQuizQuestion, QUESTIONS } from "./quest-base";
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
      {showSummary && <p>Odpwiedz ktora podales wczesniej to: {answer}</p>}
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
                <div className={a.isCorrect ? styles.ansCor : styles.ans}>
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

export function showAfterAnswerPage(){
  return <div>
    
  </div>
}