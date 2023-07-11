import styles from './box.module.scss';

type Props = React.PropsWithChildren<{}>;

export default function Box({ children }: Props) {
    return <div className={styles.box}>
        <div className="inner">
            {children}
        </div>
    </div>
}
