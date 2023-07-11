import { PropsWithChildren } from 'react';
import styles from './points-list.module.scss';

export interface PointsListProps {

}

export function PointsList({children}: PropsWithChildren<PointsListProps>) {
    return <div className={styles.pointsList}>
        {children}
    </div>
}
