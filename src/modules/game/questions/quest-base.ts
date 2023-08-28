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
        imgSrc:'http://placekitten.com/400/200',
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
            text:'115 g/km = 8695 km'
        },{
            id: '2',
            text: '162 g/km = 6172 km '
        },{
            id: '3',
            text: '148 g/km = 6756 km'
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
        description:"Obowiązek zachowania odstępu co najmniej 50 m, mamy w tunelach, których długość przekracza 500 i znajdują się poza obszarem zabudowanym.",
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
        },{
            id: '4',
            text: 'jakas odpowiedz'
        }]
    },
    {
        id:'4',
        text:'Jedziesz z prędkością 80 km/h. Jaka pozycja początkowa zapewni Ci optymalny tor jazdy po zakręcie?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"Generalna zasada doboru optymalnego toru jazdy polega na wykonaniu tego manewru po możliwie łagodnym łuku. Pokonanie tego konkretnego zakrętu powinno się rozpocząć możliwie blisko podwójnej linii ciągłej. W połowie łuku należy się zbliżyć do prawej krawędzi jezdni (szczyt zakrętu), a wyjście z zakrętu powinno zakończyć się znowu przy osi jezdni. Prawidłowa pozycja początkowa daje kierowcy również szersze pole widzenia zakrętu co pozwoli możliwie szybko zareagować na zagrożenie, które może znajdować się za łukiem drogi. Dodatkowym elementem o którym należy wspomnieć w aspekcie pokonywania zakrętów - po możliwie łagodnym łuku - jest ograniczenie działania siły odśrodkowej. Siła odśrodkowa działająca na pojazd jest główną przyczyną poślizgów występujących na łukach drogi.",
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
        },{
            id: '4',
            text: 'jakas odp.',
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
        description:"pod znakiem B-36 “zakaz zatrzymywania się” umieszczona jest tabliczka T-25C, która jest odwołaniem znaku zakazu. Tabliczki T-25 mówią nam T-25A – początek zakazu wyrażonego znakiem, T-25B – kontynuacja zakazu wyrażonego znakiem, no i wspomniana T-25C odwołująca zakaz",
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
        description:"Tak, widoczna linia pojedyncza ciągła zabranie przejeżdżania przez nią. Linia pojedyncza ciągła oddziela pasy ruchu o tym samym kierunku i oznacza ponadto zakaz przejeżdżania przez tę linię i najeżdżania na nią.",
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
        description:"Sygnalizować kierunkowskazem należy zamiar zmiany pasa ruchu i zamiar zmiany kierunku jazdy. Przepisy nie nakazują sygnalizowania nieznacznej zmiany toru jazdy, gdy na przykład delikatnie omijasz dziurę w nawierzchni jezdni.",
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
        text:'Czy w tej sytuacji, podczas postoju uszkodzonego pojazdu poza obszarem zabudowanym, masz obowiązek umieścić ostrzegawczy trójkąt odblaskowy bezpośrednio za pojazdem lub na nim?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"Kierujący pojazdem jest obowiązany sygnalizować postój pojazdu silnikowego lub przyczepy z powodu uszkodzenia lub wypadku poza obszarem zabudowanym, w razie postoju na jezdni w miejscu, w którym jest to zabronione, a na poboczu, jeżeli pojazd nie jest widoczny z dostatecznej odległości, W pozostałych sytuacjach należy sygnalizować.",
        answers:[{
            id:'1',
            text:'TAK',
            isCorrect: true
        },{
            id: '2',
            text: 'NIE'
        }]
    },
    {
        id:'10',
        text:'Czy na tej drodze zawsze masz obowiązek ustąpić pierwszeństwa pieszemu?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"W strefie ruchu, występują drogi publiczne i przynajmniej jedna z dróg jest drogą wewnętrzną. Administrator sam ustala organizację ruchu na tym obszarze. Może więc uznać, że jedna droga jest drogą z pierwszeństwem, a inna podporządkowaną. Dlatego nie można stwierdzić, że zawsze muszę ustępować pierwszeństwa, gdyż mogę w tej strefie również korzystać z drogi z pierwszeństwem, lub wynikającego z zasady “prawej ręki:. W strefie ruchu pieszy będzie miał pierwszeństwo wyłącznie jeśli ruch będzie odbywał się na tych samych płaszczyznach, np. parkingi przed hipermarketami. W pytaniu pojawia się jednak zapytanie “czy zawsze?”. Oczywiście że nie zawsze.",
        answers:[{
            id:'1',
            text:'TAK'
        },{
            id: '2',
            text: 'NIE',
            isCorrect:true
        }]
    },
    {
        id:'11',
        text:'Czy masz obowiązek bezwarunkowo zatrzymać pojazd przed linią złożoną z trójkątów?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
        answers:[{
            id:'1',
            text:'TAK'
        },{
            id: '2',
            text: 'NIE',
            isCorrect:true
        }]
    },
    {
        id:'12',
        text:'Jaką funkcję spełnia system przeciwblokujący (ABS)?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"",
        answers:[{
            id:'1',
            text:'Skraca drogę hamowania w każdych warunkach.'
        },{
            id: '2',
            text: 'Zapobiega zerwaniu przyczepności opon podczas przyspieszania.'
        },{
            id: '3',
            text: 'Ułatwia omijanie przeszkód w czasie hamowania.',
            isCorrect:true
        },{
            id: '4',
            text: 'jakas odp',
        }]
    },
    {
        id:'13',
        text:'Co jest celem gry pt. "Poruszanie się po polskich drogach"?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"Zawsze podczas jazdy najważniejsze jest bezpieczeństwo i o tym musimy pamiętać",
        answers:[{
            id:'1',
            text:'Ustanowienie jak największej ilości martwych punktów,'
        },{
            id: '2',
            text: 'Zbieranie ujemych punktów karnych,'
        },{
            id: '3',
            text: 'Poznanie przepisów drogowych.',
            
        },{
            id: '4',
            text: 'Bezpieczny powrót do domu.',
            isCorrect:true
        }]
    },
    {
        id:'14',
        text:'Czy można w Polsce legalnie korzystać z antyradaru?',
        imgSrc: 'http://placekitten.com/400/300',
        description:"Antyradar RST to kodeks drogowy, który każdy kierowca pownien znać i stosując się do przepisów będziemy jeździć bezpiecznie.",
        answers:[{
            id:'1',
            text:'nie - jest to zabronione,'
        },{
            id: '2',
            text: 'tak, pod warunkiem, że jest to antyradar RST',
            isCorrect: true
        }]
    },

]





