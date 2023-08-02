import { useCallback } from "react";
import styles from "./checkboxStyle.module.css"
import { useForm } from "react-hook-form";

type Props = {
    items: {
        id: string,
        text: string,
    }[],
    onComplete(): void
}
export default function CheckboxAnswerForm({ items, onComplete }: Props, count: number) {
    const { register} = useForm();    

    const checking = useCallback(() => {
        let isValid = false;
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
    }, [ onComplete, items.length])
    return <div>
        <nav>
            {items.map((a) => {
                return <div className={styles.singleRowAll}>
                    <p className={styles.questionText}>{a.text}</p>
                    <form className={styles.singleRowRadio}>
                        
                        <label className={styles.singleInputLabel}>prawda
                            <input type="radio"
                                id={a.id}
                                value={a.id}
                                {...register(a.id)}
                                onClick={checking}
                            /></label><br />


                        <label>fałsz
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