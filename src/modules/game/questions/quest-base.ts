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
        text:'Jakie, wg. producenta, jest średnie zużycie paliwa w Waszych VW Touran z silnikiem 2.0 TDI?',
        imgSrc:'http://placekitten.com/400/300',
        description:"bo ktoś tak chciał",
        answers:[
            {
                id: 'a1',
                text: '6.1 l/100 km',
            },{
                id: 'a2',
                text:'5.1 l/100 km',
                isCorrect: true
            },{
                id: 'a3',
                text:'4.1 l/100 km'
            },{
                id: 'a4',
                text:'9.2 l/100 km'
            }
        ]
        
    },
    {
        id:'2',
        text:'Ile km musisz przejechać vw touranem żeby do środowiska trafiła 1 tona CO2?',
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
            text: '133 g/km = 7518 km',
            isCorrect: true
        }]
    },
    {
        id:'3',
        text:'Czy kierując samochodem osobowym w tunelu o długości 600 m położonym w obszarze zabudowanym, masz obowiązek utrzymywać odstęp od poprzedzającego pojazdu nie mniejszy niż 50 metrów?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
        answers:[{
            id:'1',
            text:'Tak, ale prowadząc samochód o masie całkowitej przekraczającej 2,5 tony.'
        },{
            id: '2',
            text: 'Nie.',
            isCorrect: true,
        },{
            id: '3',
            text: 'Tak.'
        }]
    },
    {
        id:'4',
        text:'Jedziesz z prędkością 80 km/h. Jaka pozycja początkowa zapewni Ci optymalny tor jazdy po zakręcie?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"W przedstawionej sytuacji prawidłową będzie pozycja przy linii rozdzielającej pasy ruchu na prawej połowie jezdni. Uzasadnienie tej odpowiedzi znajdziemy analizując optymalny tor jazdy na zakręcie. Generalna zasada doboru optymalnego toru jazdy polega na wykonaniu tego manewru po możliwie łagodnym łuku. Pokonanie tego konkretnego zakrętu powinno się rozpocząć możliwie blisko podwójnej linii ciągłej. W połowie łuku należy się zbliżyć do prawej krawędzi jezdni (szczyt zakrętu), a wyjście z zakrętu powinno zakończyć się znowu przy osi jezdni. Prawidłowa pozycja początkowa daje kierowcy również szersze pole widzenia zakrętu co pozwoli możliwie szybko zareagować na zagrożenie, które może znajdować się za łukiem drogi. Dodatkowym elementem o którym należy wspomnieć w aspekcie pokonywania zakrętów - po możliwie łagodnym łuku - jest ograniczenie działania siły odśrodkowej. Siła odśrodkowa działająca na pojazd jest główną przyczyną poślizgów występujących na łukach drogi.",
        answers:[{
            id:'1',
            text:'Na środku drogi, z częściowym przekroczeniem widocznej linii.'
        },{
            id: '2',
            text: 'Przy prawej krawędzi jezdni'
        },{
            id: '3',
            text: 'Przy linii rozdzielającej pasy ruchu - na prawej połowie jezdni.',
            isCorrect: true
        }]
    },
    {
        id:'5',
        text:'Z jaką dopuszczalną prędkością wolno Ci kierować samochodem osobowym na drodze za widocznym znakiem?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"Dopuszczalna prędkość na drodze dwujezdniowej dwukierunkowej, o dwóch pasach ruchu wynosi - 100 km/h. Na widocznym powyżej obrazku mamy do czynienia z taką właśnie dwujezdniową drogą dwukierunkową, znajdującą się poza terenem zabudowanym. Między jezdniami znajduje się pas zieleni i na tej podstawie możemy wnioskować, że mamy do czynienia z tą właśnie drogą. ",
        answers:[{
            id:'1',
            text:'90 km/h'
        },{
            id: '2',
            text: '100 km/h',
            isCorrect: true
        },{
            id: '3',
            text: '110 km/h'
        },{
            id: '4',
            text: '120 km/h',
            
        }]
    },
    {
        id:'6',
        text:'Czy w tej sytuacji masz prawo zatrzymać pojazd za znakiem w celu wysadzenia pasażera?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
        answers:[{
            id:'1',
            text:'TAK',
            isCorrect: true
        },{
            id: '2',
            text: 'NIE'
        },]
    },
    {
        id:'7',
        text:'Czy ten znak poziomy zabrania zmiany pasa ruchu?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
        answers:[{
            id:'1',
            text:'TAK',
            isCorrect: true
        },{
            id: '2',
            text: 'NIE'
        },]
    },
    {
        id:'8',
        text:'Czy zmieniając nieznacznie tor jazdy pojazdu w obrębie dotychczas zajmowanego pasa ruchu, masz obowiązek sygnalizować to wcześniej kierunkowskazem?',
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





