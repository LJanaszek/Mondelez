
import { EndGameRedirector } from '../../game-timer/end-game-redirector';
import { Timer } from '../../game-timer/timer';
import styles from './page-header.module.scss';

export function PageHeader() {
    return <header className={styles.pageHeader}>
        <Timer></Timer>
        <EndGameRedirector></EndGameRedirector>
    </header>
}
