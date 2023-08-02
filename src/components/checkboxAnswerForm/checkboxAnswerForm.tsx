import React, { useCallback, useMemo, useReducer } from "react";
import styles from "./style.module.css"
import { useForm } from "react-hook-form";

type Props = {
    items: {
        id: string,
        text: string,
    }[],
    onComplete(): void
}
type Item = {
    text: string
}
type GameState = {
    items: Item[]
}



export default function CheckboxAnswerForm({ items, onComplete }: Props, count: number) {
    let isValid = false;
    const { register} = useForm();
    const initData: GameState = useMemo(() => {
        return {
            items: items.map((item) => {
                return {
                    id: item.id,
                    text: item.text
                }
            })
        }
    }, [items]);

    const [state] = useReducer((state: GameState) => {
        return {
            ...state,
        }
    }, initData)

    const checking = useCallback(() => {

        let allInputs = document.querySelectorAll('input')
        let count = 0;
        allInputs.forEach((element) => {

            if (element.checked) {
                count = count + 1
                console.log(count)
            }
        });
        if (count === items.length) {
            isValid = true;
        }
        if (isValid) {
            onComplete()
        }
    }, [state, onComplete])
    return <div>
        <nav>
            {items.map((a) => {
                return <div className={styles.singleRowAll}>
                    <p className={styles.questionText}>{a.text}</p>
                    <form className={styles.singleRowRadio}>
                        
                        <label className={styles.singleInputLabel}>mam
                            <input type="radio"
                                id={a.id}
                                value={a.id}
                                {...register(a.id)}
                                onClick={checking}
                            /></label><br />


                        <label>nie mam
                            <input type="radio"
                                id={a.id}
                                value={a.id}
                                {...register(a.id)}
                                onClick={checking}
                            /></label><br />
                    </form>
                </div>
            })}

        </nav>

    </div>
}