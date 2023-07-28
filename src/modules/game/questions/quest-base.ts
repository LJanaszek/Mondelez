export interface IQuizQuestion {
  id: string,
  text: string,
  imgSrc?: string,
  description: string,
  answers: {
    id: string,
    text: string,
    isCorrect?: boolean,
  }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id:'1',
        text:'pytanie tresc',
        imgSrc:'http://placekitten.com/400/300',
        description:"bo ktoś tak chciał",
        answers:[
            {
                id: 'a1',
                text: 'odp1',
            },{
                id: 'a2',
                text:'odp2',
                isCorrect: true
            },{
                id: 'a3',
                text:'odp3'
            },{
                id: 'a4',
                text:'odp4'
            }
        ]
        
    },
    {
        id:'2',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'3',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'4',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'5',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'6',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'7',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'8',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'9',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'10',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'11',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
        }]
    },
    {
        id:'12',
        text:'pytanie quizowe',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
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
            text: 'odp4',
            isCorrect: true
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





