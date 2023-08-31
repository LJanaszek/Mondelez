import { ButtonLike } from '../../atoms/button-like';
import styles from './popus.module.scss';

type Props = React.PropsWithChildren<{
    onOKClick?(): void
}>;


export function Popup({ children, onOKClick }: Props) {
    return <div className={styles.popup} aria-modal="true">

        <div className={styles.inner}>
            {children}
            {onOKClick && <ButtonLike><button className="button" onClick={onOKClick}>OK</button></ButtonLike>}
        </div>
    </div>
}
