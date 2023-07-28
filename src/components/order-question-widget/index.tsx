import React, { useCallback, useMemo, useReducer } from "react";
import Box from "../layout/box/box";
import { Card } from "./card";
import style from "./style.module.css"

type Props = {
    items: string[]
}

type Item = {
    id: string,
    text: string
}

type GameState = {
    items: Item[]
}


export default function OrderQuestionLayout({items}: Props) {

    const initData: GameState = useMemo(() => {
        return {
            items: items.map((item, index) => {
                return {
                    id: `${index}`,
                    text: item
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
        document.querySelectorAll('.item')[index-1]?.querySelectorAll('button')[0]?.focus();
    }, [moveCard]);

    const moveDown = useCallback((index: number) => {
        if (index < items.length) {
            moveCard(index, index + 1)
        }
        document.querySelectorAll('.item')[index+1]?.querySelectorAll('button')[1]?.focus();
    }, [moveCard, items]);

    return <div>
            <Box>
                <div aria-live='assertive' className={style.itemgroup}>
                    {
                        state.items.map((item, index) => {

                            if (item) {
                                return <div className={style.item} key={index}>
                                    <Card>
                                        <GameItem item={item} />
                                    </Card>
                                    <button onClick={() => moveUp(index)} aria-label={`Pozycja ${index+1}: ${item.text} Przenieś wyżej`}>
                                        <span className="material-icons">   
                                            &#xe5d8;
                                        </span>
                                    </button>
                                    <button onClick={() => moveDown(index)} aria-label={`Pozycja ${index+1}: ${item.text} Przenieś niżej`}>
                                        <span className="material-icons">
                                            &#xe5db;
                                        </span>
                                    </button>
                                </div>
                            }

                            return <></>

                        })
                    }
                </div>
            </Box>
        </div>
}


const GameItem: React.FC<{
    item: Item
}> = ({ item }) => {
    return <div className={`pick-up`}>
        {item.text}
    </div>
}


