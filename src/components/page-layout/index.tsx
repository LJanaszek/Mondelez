import React from "react";
import useFocusOnMount from "../../utils/use-focus-on-mount";
import Box from "../layout/box/box";
import ColumnLayout, { Decor } from "../column-layout";
import NiceButton from "../nice-button copy";

type Props = {
    // previous: string,
    // previousLabel?: string,
    // next: string,
    // nextLabel?: string,
    focusNext?: boolean
    decors?: Decor[]
}

export default function PageLayout({ children, decors, focusNext }: React.PropsWithChildren<Props>) {

    const target = useFocusOnMount(!focusNext)

    return <ColumnLayout
        // left={<NiceButton to={previous} label={previousLabel || 'Wróć'} />}
        // right={<NiceButton ref={target} to={next} label={nextLabel || 'Dalej'} />}
        decors={decors}
    >
        <div>
            <Box>
                {children}
            </Box>
        </div>
    </ColumnLayout>
}
