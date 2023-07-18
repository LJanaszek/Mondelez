import { Style } from "@material-ui/icons";
import { useReducer } from "react"
import Select from 'react-select';
import style from "./style.module.css";
type Props = {
    relations: string[],
    interpretations: string[]
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

export default function Page92Widget2({ relations, interpretations }: Props) {
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
        items: [
            {
                id: 'blank',
                text: '---'
            },
            ...interpretations.map((r, index) => {
                return {
                    id: `i${index}`,
                    text: r
                }
            })],
        slots: relations.map((r, index) => {
            return {
                id: `s${index}`,
                title: r,
                item: null
            }
        }),
        unselected: ['blank', ...interpretations.map((r, index) => `i${index}`)]
    });

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
