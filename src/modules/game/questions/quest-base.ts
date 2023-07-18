export interface IQuizQuestion {
  id: string,
  text: string,
  imgSrc?: string,
  answers: {
    id: string,
    text: string,
    isCorrect?: boolean
  }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id:'1',
        text:'pytanie tresc',
        imgSrc:'http://placekitten.com/400/300',
        answers:[
            {
                id: '1',
                text: 'odp21',
                isCorrect: false
            },{
                id: '2',
                text:'odp2',
                isCorrect: true
            },{
                id: '3',
                text:'odp3'
            },{
                id: '4',
                text:'odp4'
            }
        ]
        
    },
    {
        id:'2',
        text:'pytanie 2 tresc',
        imgSrc: 'http://placekitten.com/400/300',
        answers:[{
            id:'1',
            text:'odp1'
        },{
            id: '2',
            text: 'odp2'
        },{
            id: '3',
            text: 'odp3'
        },{
            id: '4',
            text: 'odp4'
        }]
    }
]
export interface QuizAnswers{
    id: string,
    correct:{
        id:string
    }[]
}
export const ANSWERS: QuizAnswers[]=[
    {
        id:'1',
        correct:[{
            id:'1'
        }]
    },
    {
        id:'2',
        correct:[{
            id:'3'
        }] 
    }
]





