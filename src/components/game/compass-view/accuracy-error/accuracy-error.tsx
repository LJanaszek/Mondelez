import styles from './accuracy-error.module.scss';

export interface Props {
    accuracy?: number,
    minGeoAccuracy: number
}

export function AccuracyErrorTemplate({accuracy, minGeoAccuracy}: Props) {
    return <div className={styles.accuracyError}>
        <div className={styles.inner}>
            <h3>Zaczekaj chwilę, trwa kalibracja urządzenia!</h3>
            <p>
                Twoje urządzenie musi udostępniać lokalizację z dokładnością przynajmniej{'\u00A0'}<strong>{minGeoAccuracy} metrów</strong>.
            </p>
            <p>
                Aktualna dokładność pomiaru: <strong>{Math.round(accuracy || 0)} metrów</strong>.
            </p>
        </div>
    </div>
}
