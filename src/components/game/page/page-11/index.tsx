import {useState } from "react";
import BoxTask from "../../../layout/boxTask/box"
import CheckboxAnswerForm from "../../../checkboxAnswerForm/checkboxAnswerForm";
import styles from "../../../layout/boxTask/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like";

type Props = {
    
    onNext(): void
}
export default function Page11({onNext}: Props) {
    // useContext()
    const [showNext, setShowNext] = useState(false);
        return <BoxTask>
            <div className={styles.mainDiv}>
            <h1>Gotowi na wszystko</h1>
            <p>Upewnijcie się, że jesteście odpowiednio przygotowani na każdą ewentualność. Znajdźcie Waszą samochodową apteczkę i przeprowadźcie jej inwentaryzację. Na poniższej liście zaznaczcie co w niej jest, a czego brakuje. Zróbcie sobie zdjęcie z apteczką i przedstawcie ja na punkcie finałowym osobie prowadzącej grę.</p></div>
    <CheckboxAnswerForm 
    items = {[
        {id: '1', text :'Rękawiczki jednorazowe (2-3 pary)'},
        {id: '1', text: 'Plastry z opatrunkiem w kilku rozmiarach'},
        {id: '1', text:'Opaska elastyczna (4m x 6cm)'},
        {id: '1', text:'Opaska elastyczna (4m x 8cm)'},
        {id: '1', text:'Kompres gazowy'},
        {id: '1', text:'Gaza opatrunkowa'},
        {id: '1', text:'Plaster'},
        {id: '1', text:'Nożyczki'},
        {id: '1', text:'Chusta trójkątna'},
        {id: '1', text:'Gaziki do dezynfekcji'},
        {id: '1', text:'bandaż zwykły'},
        {id: '1', text:'bandaż elastyczny'},
        {id: '1', text:'maska/ustnik do oddechów ratowniczych'},
        {id: '1', text:'folia NRC'},
        {id: '1', text:'Instrukcja udzielania pierwszej pomocy'},
        {id: '1', text:'Maska ochronna 3 warstwowa '}
    ]} 
    onComplete={()=>(setShowNext(true))}/>
    {showNext && <section className={styles.section}><ButtonLike> <button onClick={onNext}>Zakończ zadanie</button></ButtonLike>
    </section>}
    
    </BoxTask>
}