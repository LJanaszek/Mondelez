import { PageHeader } from "../../layout/headerWithoutTimer/page-header"
import styles from './box.module.scss';

type Props = React.PropsWithChildren<{}>;

export default function Box({ children }: Props) {
    return <div>
        <div className={styles.header}><PageHeader /></div>
    <div className={styles.box}>
        
        <div className="inner">
            {children}
        </div>
    </div></div>
}
