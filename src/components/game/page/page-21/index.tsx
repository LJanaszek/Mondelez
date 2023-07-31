import { useCallback, useState } from "react";
import { FindDiff, FindDiffGameState } from "../../../find-diff/find-diff";
import Box from "../../../layout/box/box";

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
        <Box>
            <div style={{position: 'relative', minHeight: '80vh'}}>
                <p>znajdź różnicę</p>
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
                            x: 610,
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
                            y: 390
                        }
                    },
                    {
                        id: 'b07',
                        position: {
                            x: 400,
                            y: 400
                        }
                    },
                    {
                        id: 'b08',
                        position: {
                            x: 135,
                            y: 495
                        }
                    },
                    {
                        id: 'b09',
                        position: {
                            x: 230,
                            y: 565
                        }
                    },
                    {
                        id: 'b10',
                        position: {
                            x: 520,
                            y: 545
                        }
                    }]}
                    imgWidth={443}
                    imgHeight={788}
                    img1src={'/find-diff-demo-1.jpg'}
                    img2src={'/find-diff-demo-2.jpg'}
                />
            </div>
            {showNext && <button onClick={onNext}>Dalej</button>}
        </Box>
    );
}
