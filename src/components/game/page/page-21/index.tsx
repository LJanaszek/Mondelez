import { useCallback, useState } from "react";
import { FindDiff, FindDiffGameState } from "../../../find-diff/find-diff";
import BoxTask from "../../../layout/boxTask/box";
import styles from "../../../layout/boxTask/box.module.scss"
import img1 from "../../../../assets/1.png"
import img2 from "../../../../assets/2.png"
import { ButtonLike } from "../../../../atoms/button-like";
import { Popup } from "../../../../molecules/popup/popup";

type Props = {
    onNext(): void;
};

export default function Page21({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);

    const onGameStateChanged = useCallback((state: FindDiffGameState) => {
        if (state.isComplete) {
            setShowNext(true)
        }
    }, [setShowNext])

    return (
        <BoxTask>
            <div className={styles.mainDiv}>
                <h1>Trening spostrzegawczości
                </h1>
                <p>Prowadząc samochód należy uważnie obserwować otoczenie i zwracać uwagę nawet na niewielkie szczegóły. Poćwiczcie swoją spostrzegawczość i zaznaczcie 5 różnic na poniższych obrazkach:</p>
            </div>
            <div style={{ position: 'relative', minHeight: '50vh', margin: '0 1em', background: 'white' }}>
                <FindDiff
                    onGameStateChanged={onGameStateChanged}
                    targets={[{
                        id: 'b01',
                        position: {
                            x: 187,
                            y: 120
                        }
                    },
                    {
                        id: 'b02',
                        position: {
                            x: 290,
                            y: 320
                        }
                    },
                    {
                        id: 'b03',
                        position: {
                            x: 425,
                            y: 135
                        }
                    },
                    {
                        id: 'b04',
                        position: {
                            x: 310,
                            y: 185
                        }
                    },
                    {
                        id: 'b05',
                        position: {
                            x: 380,
                            y: 340
                        }
                    }]}
                    imgWidth={619}
                    imgHeight={391}
                    img1src={img1}
                    img2src={img2}
                />
            </div>
            {showNext && <Popup><p>Brawo!</p><p>Udało wam się znaleźc wszystkie różnice</p><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike></Popup>}
        </BoxTask>
    );
}
