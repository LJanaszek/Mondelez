import { IMAGES, ImagesBase } from "../../../../modules/game/images/images-base"
import Box from "../../../layout/box/box"
import styles from "../style.module.css"

type Props = {
    onNext(): void
}
export interface ForImg{
    images:ImagesBase
} 
export default function Page4({onNext}: Props, {images}:ForImg,) {
    return <Box>
        <p>zadanie 4</p>
            {IMAGES.map(a => {
                            return <div key={a.id} className={styles.task_4}>
                                <div className={styles.choice}>
                                {IMAGES.map(y =>{
                                    return <button className={styles.btn}>{y.id}</button>
                                })}
                                </div>
                                <div className={styles.images}>
                                <img src={a.imgSrc} alt={a.text} />                              
                                </div>
                            </div>
                        })}


        <button onClick={onNext}>Dalej</button>
        
    </Box>
}
