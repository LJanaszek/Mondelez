import styles from './page-footer.module.scss';
import mondelez from '../../../assets/mondelezW.png'
export function PageFooter() {
    return <footer className={styles.footer}>
        <img src={mondelez} alt="mondelez international" />
    </footer>
}
