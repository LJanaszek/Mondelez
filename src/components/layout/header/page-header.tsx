
import { Timer } from '../../game-timer/timer';
import styles from './page-header.module.scss';

export function PageHeader() {
    return <header className={styles.pageHeader}>
        <Timer></Timer>
    </header>
}
