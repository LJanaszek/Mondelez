import styles from './popus.module.scss';

type Props = React.PropsWithChildren<{
    onClick(): void
}>;


export function Popup({ children, onClick }: Props) {
    return <div className={styles.popup} aria-modal="true">

        <div className={styles.inner}>
            {children}
            <button className="button" onClick={onClick}>OK</button>
        </div>
    </div>
}
