export interface IQuizQuestion {
  id: string,
  text: string,
  imgSrc?: string,
  answers: {
    text: string,
    isCorrect?: boolean
  }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id:'1',
        text:'pytanie tresc',
        answers:[
            {
                text: 'odp1'
            },{
                text:'odp2'
            }
        ]
        
    },
    {
        id:'2',
        text:'pytanie 2 tresc',
        answers:[{
            text:'odp1'
        },{
            text: 'dop2'
        }]
    }
]





