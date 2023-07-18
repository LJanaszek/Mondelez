import { useEffect, useRef } from "react";

export default function useFocusOnMount(disabled?: boolean, ignoreTabIndex?: boolean) {
    const ref = useRef<any>(null);

    useEffect(() => {
        if(!disabled) {
            if (!ignoreTabIndex) ref.current?.setAttribute('tabIndex', -1);
            ref.current?.focus();
        }
    }, [disabled, ignoreTabIndex]);

    return ref;
}
