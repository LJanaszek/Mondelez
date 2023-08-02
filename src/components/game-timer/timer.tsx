import { useTimeToEnd } from "../../modules/game/hooks/use-time-to-end";



export function Timer (){
    const timeToShow = useTimeToEnd()
    if(!timeToShow){
        return <p>gra jeszcze się nie zaczęła</p>
    }

    
    
    const minutesToShow: number = (Math.floor(timeToShow/60000));
    const secundsToShow: number = (Math.floor(timeToShow/1000)%60);

    const minutesText: string = minutesToShow>=10 ? `${minutesToShow}` : '0'+minutesToShow;
    const secundsText: string = secundsToShow>=10 ? ''+secundsToShow : '0'+secundsToShow;

    // Math.floor
    
    return <p>Czas: {minutesText}:{secundsText}</p>
}