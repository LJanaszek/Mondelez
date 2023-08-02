import { Link } from "react-router-dom";
import { getPolicyRoute } from "../../../routes/routes";
import styles from './cookies.module.scss';
import { ButtonsRow } from "../../../atoms/buttons-row/buttons-row";

// const LS_KEY = 'cookiesInfo2'

export interface Props {
    closeCookies?(): void;
}

/**
 * Wygląd popupa do zatwierdzenia plików cookie
 */
export function CookiesInfo({ closeCookies }: Props) {

    return <div aria-modal="true" role="dialog" aria-describedby="cookie-info" className={styles.cookies}>
        <div className={styles.window}>
            <div className={styles.inner}>
                <p id="cookie-info">
                    Używamy plików cookies, aby ułatwić Ci korzystanie z naszego serwisu oraz do celów statystycznych. Jeśli nie blokujesz tych plików, to zgadzasz się na ich użycie oraz zapisanie w pamięci urządzenia. Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki. Więcej informacji w naszej <Link to={getPolicyRoute()}>polityce prywatności</Link>.
                </p>
                <ButtonsRow align="center">
                    <button className="button" tabIndex={1} onClick={closeCookies}>Dalej</button>
                </ButtonsRow>
            </div>
        </div>
    </div>
}
