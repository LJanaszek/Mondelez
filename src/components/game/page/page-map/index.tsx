import { useCallback } from "react"
import Box from "../../../layout/box/box"
import { MapComponent } from "../../../map/map-component"

type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {

    const onPointerClicked = useCallback((id: string) => {
        console.log(`KTOS KLIKNAL ${id} `);
    }, [])

    return <Box>
        <MapComponent onPointerClicked={onPointerClicked} activePointIds={[]} inactivePointIds={[]} selectedPoint="" mapPointsData={[]} />
        <button onClick={onNext}>Dalej</button>
    </Box>
}
