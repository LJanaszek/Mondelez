import { useCallback, useState } from "react";
import { FindDiff, FindDiffGameState } from "../../../find-diff/find-diff";
import BoxTask from "../../../layout/boxTask/box";
import styles from "../../../layout/boxTask/box.module.scss"
import img1 from "../../../../assets/1.png"
import img2 from "../../../../assets/2.png"
import { ButtonLike } from "../../../../atoms/button-like";

type Props = {
    onNext(): void;
};

export default function Page21({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);

    const onGameStateChanged = useCallback((state: FindDiffGameState) => {
        if(state.isComplete){
            setShowNext(true)
        }
    }, [setShowNext])

    return (
        <BoxTask>
            <div className={styles.mainDiv}>
                <h1>bla bla bla</h1>
                <p>znajdź różnicę na obrazkach</p>
            </div>
            <div style={{position: 'relative', minHeight: '50vh', margin: '0 1em', background:'white'}}>
                <FindDiff
                    onGameStateChanged={onGameStateChanged}
                    targets={[{
                        id: 'b01',
                        position: {
                            x: 160,
                            y: 135
                        }
                    },
                    {
                        id: 'b02',
                        position: {
                            x: 510,
                            y: 76
                        }
                    },
                    {
                        id: 'b03',
                        position: {
                            x: 515,
                            y: 205
                        }
                    },
                    {
                        id: 'b04',
                        position: {
                            x: 650,
                            y: 195
                        }
                    },
                    {
                        id: 'b05',
                        position: {
                            x: 240,
                            y: 220
                        }
                    },
                    {
                        id: 'b06',
                        position: {
                            x: 135,
                            y: 290
                        }
                    },
                    {
                        id: 'b07',
                        position: {
                            x: 400,
                            y: 300
                        }
                    },
                    {
                        id: 'b08',
                        position: {
                            x: 135,
                            y: 195
                        }
                    },
                    {
                        id: 'b09',
                        position: {
                            x: 230,
                            y: 265
                        }
                    },
                    {
                        id: 'b10',
                        position: {
                            x: 520,
                            y: 245
                        }
                    }]}
                    imgWidth={619}
                    imgHeight={391}
                    img1src={img1}
                    img2src={img2}
                />
            </div>
            {showNext && <div className={styles.section2}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></div>}
        </BoxTask>
    );
}
