import { useEffect, useReducer } from "react"
import Select from 'react-select';
import style from "./style.module.css";

type Props = {
    itemDescriptions: {
        id: string,
        text: string,
        nameId: string
    }[],
    itemNames: {
        id: string,
        text: string
    }[],
    onComplete(): void
}

type Item = {
    id: string,
    text: string
}

type Slot = {
    id: string,
    title: string,
    item: Item | null
}

type GameState = {
    items: Item[],
    unselected: string[],
    slots: Slot[]
}

export default function Page92Widget2({ itemDescriptions, itemNames, onComplete }: Props) {
    const [state, moveItem] = useReducer((state: GameState, action: { itemId: string, slotId: string }) => {
        const item = state.items.find(i => i.id === action.itemId);
        const slot = state.slots.find(s => s.id === action.slotId);

        if (item && slot) {
            const oldItem = slot.item;

            if (oldItem) {
                state.unselected = Array.from(new Set([...state.unselected, oldItem.id]));
            }

            return {
                ...state,
                slots: state.slots.map(s => {
                    if (s.id === action.slotId) {
                        s.item = item;
                    } else if (s.item?.id === action.itemId) {
                        s.item = null;
                    }
                    return s;
                }),
                unselected: item.id !== 'blank' ? state.unselected.filter(id => id !== action.itemId) : state.unselected
            }
        }

        return state;
    }, {
        // Lista wszystkich elementów do wyboru (imetName) + pusty element
        items: [
            {
                id: 'blank',
                text: '---'
            },
            ...itemNames.map((itemName) => {
                return {
                    id: itemName.id,
                    text: itemName.text
                }
            })],

        // Lista wszystkich opisów - w polu `item` jest wybrana nazwa
        slots: itemDescriptions.map((itemDescription) => {
            return {
                id: itemDescription.id,
                title: itemDescription.text,
                item: null
            }
        }),

        // Lista wszystkich jescze nie przypisanych nazw
        unselected: [
            'blank', 
            ...itemNames.map((itemName) => itemName.id)
        ]
    });

    useEffect(() => {

        const answersInState: {
            descriptionId: string,
            nameId: string | undefined
        }[] = state.slots.map((slot) => {
            return {
                descriptionId: slot.id,
                nameId: slot.item?.id
            };
        });

        console.log({answersInState, itemDescriptions});

        const isValid = itemDescriptions.every((description) => {
            const userAnswer = answersInState.find(a => a.descriptionId === description.id);

            return userAnswer?.nameId === description.nameId;
        });

        console.log({isValid});

        if (isValid) {
            onComplete();
        }
    }, [state, onComplete, itemDescriptions]);

    return <div className={style.container}>
        <div className={style.grid}>
            {
                state.slots.map(slot => {
                    return <>
                        <div className="reaction">
                            <p>
                                {slot.title}
                            </p>
                        </div>
                        <div className="intension">
                            <Select
                                value={{ value: slot.item?.id, label: slot.item?.text }}
                                onChange={(data) => {
                                    if (data?.value)
                                        moveItem({
                                            itemId: data.value,
                                            slotId: slot.id
                                        })
                                }}
                                options={state.items
                                    .filter(item => state.unselected.find(id => item.id === id))
                                    .map((item) => {
                                        return {
                                            value: item!.id,
                                            label: item!.text
                                        }
                                    })}
                                theme={(provided) => {
                                    return {
                                        ...provided,
                                        colors: {
                                            ...provided.colors,
                                            primary: '#FCD779',
                                            primary25: '#FCD779',
                                            neutral0: '#FAF5E8'
                                        }
                                    }
                                }}
                                styles={{
                                    container: (provided, state) => {
                                        return {
                                            ...provided,
                                            width: '100%',
                                            background: '#FAF5E8'
                                        }
                                    },
                                    control: (provided, state) => {
                                        return {
                                            ...provided,
                                            background: '#FAF5E8'
                                        }
                                    },
                                    singleValue: (provided, state) => {
                                        // const opacity = state.isDisabled ? 0.5 : 1;
                                        // const transition = 'opacity 300ms';

                                        return {
                                            ...provided,
                                            whiteSpace: 'normal'
                                        };
                                    }
                                }}
                            ></Select>
                        </div>
                    </>
                })
            }
        </div>
    </div>
}
