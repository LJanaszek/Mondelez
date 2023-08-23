import { useCallback, useState } from "react";
import styles from "./checkboxStyle.module.scss"
import { useForm } from "react-hook-form";
import { ButtonLike } from "../../atoms/button-like";

type Props = {
    items: {
        id: string,
        text: string,
        isCorrect: boolean
    }[],
    onComplete(): void,
    onInComplete(): void
}
export default function CheckboxAnswerForm({ items, onComplete, onInComplete }: Props) {
    const [showButton, setShowButton] = useState(false)

    const { register } = useForm();
    const checking = useCallback(() => {
        let isValid = false;
        let count = 0
        const allInputs = document.querySelectorAll("input")
        console.log(isValid)
        allInputs.forEach((element) => {
            if (element.checked) {
                count = count + 1
            }
        });
        if (count === items.length) {
            setShowButton(true)
        }
    }, [onComplete, items.length])
    return <div>
        <nav>
            {items.map((a) => {
                return <div className={styles.singleRowAll}>
                    <div className={styles.questionText}>{a.text}</div>
                    <form className={styles.singleRowRadio}>

                        <label className={styles.singleInputLabel}>
                            <input type="radio"
                                id={a.id}
                                {...register(a.id)}
                                onClick={checking}
                                className="true"
                                value="true"
                                
                            />
                            <div className={styles.singleRadio} id={a.id}>PRAWDA</div></label><br />


                        <label>
                            <div className={styles.singleRadio}>FAŁSZ</div>
                            <input type="radio"
                                id=""
                                {...register(a.id)}
                                onClick={checking}
                            />
                            </label>
                    </form>
                </div>
            })}

        </nav>
        {showButton && <section className={styles.buttonLike}><ButtonLike><button onClick={() => {
            const corrAns = items.filter(x => x.isCorrect)
            let trueA = 0
            let allChecked = 0
            const allInputs = document.querySelectorAll('input')
            corrAns.map((a) => {
                for (let i = 0; i < allInputs.length; i++) {
                    if (allInputs[i].checked && allInputs[i].id === a.id) {
                        trueA = trueA + 1
                    }
                }
            })
            for (let i = 0; i < allInputs.length; i++) {
                if (allInputs[i].checked && allInputs[i].value === "true") {
                    allChecked = allChecked + 1
                }
            }
            // console.log(allChecked, trueA, corrAns.length)
            if (allChecked === trueA && trueA === corrAns.length) {
                onComplete()
            }
            else {
                onInComplete()
            }
            // console.log(allInputs)
        }}>sprawdź</button> </ButtonLike></section>}
    </div>
}