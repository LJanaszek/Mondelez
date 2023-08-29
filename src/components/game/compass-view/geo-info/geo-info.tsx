import { useMemo } from "react";
import styles from './geo-info.module.scss';
import Box from "../../../layout/boxTask/box";

type Props = {
    distance: number,
    name: string[],
    bering: number
}

export function GeoInfo({ distance, name, bering }: Props) {

    const direction = useMemo(() => {
        if (bering < 22.5) {
            return 'północ';
        } else if (bering < 67.5) {
            return 'północny-wschód';
        } else if (bering < 112.5) {
            return 'wschód';
        } else if (bering < 157.5) {
            return 'połódniowy-wschód';
        } else if (bering < 202.5) {
            return 'południe';
        } else if (bering < 247.5) {
            return 'południowy-zachód';
        } else if (bering < 292.5) {
            return 'zachód';
        } else if (bering < 337.5) {
            return 'północny-zachód';
        } else {
            return 'północ';
        }
    }, [bering]);

    return <Box>
    <div className={styles.mainDiv}>
        <div className={styles.inner}>
            Aby dojść do<br />
            <div className={styles.adress}>
                {name[0] && <span dangerouslySetInnerHTML={{__html: name[0]}}></span>}
                {name[1] && <span dangerouslySetInnerHTML={{__html: name[1]}}></span>}
            </div>
            kieruj się <strong>{Math.round(distance)}m.</strong> na{'\u00A0'}<strong style={{whiteSpace: 'nowrap'}}>{direction}</strong><br />
        </div>
    </div>
    </Box>
}
