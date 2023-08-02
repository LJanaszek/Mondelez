import { useState, useCallback } from "react";
import { CookiesInfo } from "./cookies";

const LS_KEY = 'cookiesInfo2'

export function CookiesInfoComponent() {
    const [showCookies, setShowCookies] = useState<boolean>(!Boolean(localStorage.getItem(LS_KEY)))

    const closeCookies = useCallback(() => {
        localStorage.setItem(LS_KEY, '1');
        setShowCookies(false);
    }, []);

    return <>
        {showCookies && <CookiesInfo closeCookies={closeCookies} />}
    </>
}
