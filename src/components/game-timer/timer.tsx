import { useTimeToEnd } from "../../modules/game/hooks/use-time-to-end";
import style from './timer.module.css'
import timer from "../../assets/timer.png"
export function Timer (){
    const timeToShow = useTimeToEnd()
    if(!timeToShow){
        return <p className={style.timer}><img src={timer} alt="" /> 120:00</p>;
    }

    
    
    const minutesToShow: number = (Math.floor(timeToShow/60000));
    const secundsToShow: number = (Math.floor(timeToShow/1000)%60);

    const minutesText: string = minutesToShow>=10 ? `${minutesToShow}` : '0'+minutesToShow;
    const secundsText: string = secundsToShow>=10 ? ''+secundsToShow : '0'+secundsToShow;

    // Math.floor
    if(minutesToShow >=0 && secundsToShow>0){
        return <p className={style.timer}><img src={timer} alt="" /> {minutesText}:{secundsText}</p>}
    else{
        return <p className={style.timer}>koniec czasu</p>
    }
}