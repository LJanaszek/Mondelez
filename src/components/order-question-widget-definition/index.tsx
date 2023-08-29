import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import Box from "../layout/box/box";
import { Card } from "./card";
import style from "./style.module.css"

type Props = {
    items: { text: string, correctPlace: number }[],
    onComplete(): void
}

type Item = {
    correctPlace: number,
    text: string
}

type GameState = {
    items: Item[]
}


export default function OrderQuestionLayout({ items, onComplete }: Props) {

    const initData: GameState = useMemo(() => {
        return {
            items: items.map((item, index) => {
                return {
                    correctPlace: item.correctPlace,
                    text: item.text
                }
            })
        }
    }, [items]);

    const [state, itemMove] = useReducer((state: GameState, { dragIndex, hoverIndex }: { dragIndex: number, hoverIndex: number }) => {
        const copyArr = [...state.items];
        copyArr.splice(hoverIndex, 0, copyArr.splice(dragIndex, 1)[0]);

        return {
            ...state,
            items: [...copyArr]
        }
    }, initData)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        itemMove({ dragIndex, hoverIndex })
    }, []);


    const moveUp = useCallback((index: number) => {
        if (index > 0) {
            moveCard(index, index - 1)
        }
        document.querySelectorAll('.item')[index - 1]?.querySelectorAll('button')[0]?.focus();
    }, [moveCard]);

    const moveDown = useCallback((index: number) => {
        if (index < items.length) {
            moveCard(index, index + 1)
        }
        document.querySelectorAll('.item')[index + 1]?.querySelectorAll('button')[1]?.focus();
    }, [moveCard, items]);

    useEffect(() => {
        // let i = 0;
        let isValid = false;
        let score = 0;
        for (let i = 0; i < items.length; i++) {
            if (state.items[i].correctPlace === i) {
                score = score + 1
            }
        }

        if (score === state.items.length) {
            isValid = true;
        }
        if (isValid) {
            onComplete();
        }

    }, [state, onComplete, items.length])
    const definitions = [
        "ASR",
        "ABS",
        "EBV",
        "MSR"
    ]
    return <div>

        <div aria-live='assertive' className={style.itemgroup}>
            {
                state.items.map((item, index) => {

                    if (item) {
                        return <div className={style.item} key={index}>
                            <div className={style.definition}>{definitions[index]}</div>
                            <div className={style.buttonGroup}>
                                <button onClick={() => moveUp(index)} aria-label={`Pozycja ${index + 1}: ${item.text} Przenieś wyżej`} className={style.arrow}>
                                    <span className="material-icons">
                                        &#xe5c7;
                                    </span>
                                </button>
                                <button onClick={() => moveDown(index)} aria-label={`Pozycja ${index + 1}: ${item.text} Przenieś niżej`} className={style.arrow2}>
                                    <span className="material-icons">
                                        &#xe5c5;

                                    </span>
                                </button>
                            </div>
                            <section className={style.itemsName}>
                                <Card>
                                    <GameItem item={item} />
                                </Card>
                            </section>
                        </div>
                    }

                    return <></>

                })
            }
        </div>

    </div>
}


const GameItem: React.FC<{
    item: Item
}> = ({ item }) => {
    return <div className={style.pickUp}>
        {item.text}
    </div>
}


