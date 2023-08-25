
import { EndGameRedirector } from '../../game-timer/end-game-redirector';
import { Timer } from '../../game-timer/timer';
import styles from './page-header.module.scss';

export function PageHeader() {
    return <header className={styles.pageHeader}>
        <h1 className={styles.headerTitle}>Safety Master</h1><br />
        <Timer></Timer>
        <EndGameRedirector></EndGameRedirector>
    </header>
}
