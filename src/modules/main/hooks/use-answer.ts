import { useMainModuleDispatch, useMainModuleState } from "..";

/**
 * Hook który zwraa watość odpowiedzi na pytanie o podanym [id]
 */
export function useAnswer(id:string):any{
    // Pobieram cały stam modulu main
    const state = useMainModuleState();  


    // Przypisuje do `andwer` obiekt odpowiedzi o answer.id === id lub undefined jezeli odpowiedx nie istnieje 
    const answer = state.gameState?.answers.find(a => {
        return a.id === id;
    })

    return answer?.value;  
        
}