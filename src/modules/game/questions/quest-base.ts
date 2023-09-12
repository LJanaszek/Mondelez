import img1 from "../../../assets/fuel.png"
import img2 from "../../../assets/co2.png"
import img3 from "../../../assets/3.jpg"
import img4 from "../../../assets/4.jpg"
import img5 from "../../../assets/5.jpg"
import img6 from "../../../assets/6.jpg"
import img7 from "../../../assets/7.jpg"
import img8 from "../../../assets/8.jpg"
import img9 from "../../../assets/9.jpg"
import img10 from "../../../assets/10.jpg"
import img11 from "../../../assets/11.jpg"
import img12 from "../../../assets/abs.png"
import img13 from "../../../assets/auta.png"
import img14 from "../../../assets/antyradar.png"
export interface IQuizQuestion {
    id: string,
    text: string,
    imgSrc?: string,
    description?: string,
    answers: {
        id: string,
        text: string,
        isCorrect?: boolean,
    }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id: '1',
        text: 'Jakie, wg. producenta, jest średnie zużycie paliwa w Waszych VW Touran z silnikiem 2.0 TDI?',
        imgSrc: img1,
        description: "",
        answers: [
            {
                id: '1',
                text: '6.3 l/100 km.',
            }, {
                id: '2',
                text: '5.1 l/100 km.',
                isCorrect: true
            }, {
                id: '3',
                text: '3.1 l/100 km.'
            }, {
                id: '4',
                text: '7.2 l/100 km.'
            }
        ]

    },
    {
        id: '2',
        text: 'Ile kilometrów musicie przejechać volkswagenem touranem żeby do środowiska trafiła 1 tona CO2?',
        imgSrc: img2,
        description: "Volkswagen touran emituje 133 gramy CO2 na każdy przejechany kilometr.",
        answers: [{
            id: '1',
            text: '115 g/km = 8695 km.'
        }, {
            id: '2',
            text: '162 g/km = 6172 km.'
        }, {
            id: '3',
            text: '148 g/km = 6756 km.'
        }, {
            id: '4',
            text: '133 g/km = 7518 km.',
            isCorrect: true
        }]
    },
    {
        id: '3',
        text: 'Czy kierując samochodem osobowym w tunelu o długości 600 m położonym w obszarze zabudowanym, macie obowiązek utrzymywać odstęp od poprzedzającego pojazdu nie mniejszy niż 50 metrów?',
        imgSrc: img3,
        description: "Obowiązek zachowania odstępu co najmniej 50 m mamy w tunelach, których długość przekracza 500 metrów i znajdują się poza obszarem zabudowanym.",
        answers: [{
            id: '1',
            text: 'Tak, ale prowadząc samochód o masie całkowitej przekraczającej 2,5 tony.'
        }, {
            id: '2',
            text: 'Nie.',
            isCorrect: true,
        }, {
            id: '3',
            text: 'Tak.'
        }]
    },
    {
        id: '4',
        text: 'Jedziecie z prędkością 80 km/h. Jaka pozycja początkowa zapewni Ci optymalny tor jazdy po zakręcie?',
        imgSrc: img4,
        description: "Generalna zasada doboru optymalnego toru jazdy polega na wykonaniu tego manewru po możliwie łagodnym łuku. Pokonanie tego konkretnego zakrętu powinno się rozpocząć możliwie blisko podwójnej linii ciągłej. W połowie łuku należy się zbliżyć do prawej krawędzi jezdni (szczyt zakrętu), a wyjście z zakrętu powinno zakończyć się znowu przy osi jezdni. Dodatkowym elementem o którym należy wspomnieć w aspekcie pokonywania zakrętów jest ograniczenie działania siły odśrodkowej.",
        answers: [{
            id: '1',
            text: 'Na środku drogi, z częściowym przekroczeniem widocznej linii.'
        }, {
            id: '2',
            text: 'Przy prawej krawędzi jezdni.'
        }, {
            id: '3',
            text: 'Przy linii rozdzielającej pasy ruchu - na prawej połowie jezdni.',
            isCorrect: true
        }]
    },
    {
        id: '5',
        text: 'Z jaką dopuszczalną prędkością wolno Wam kierować samochodem osobowym na drodze za widocznym znakiem?',
        imgSrc: img5,
        description: "Dopuszczalna prędkość na drodze dwujezdniowej dwukierunkowej, o dwóch pasach ruchu wynosi - 100 km/h. Na widocznym powyżej obrazku mamy do czynienia z taką właśnie dwujezdniową drogą dwukierunkową, znajdującą się poza terenem zabudowanym. Między jezdniami znajduje się pas zieleni i na tej podstawie możemy wnioskować, że mamy do czynienia z tą właśnie drogą.",
        answers: [{
            id: '1',
            text: '90 km/h'
        }, {
            id: '2',
            text: '100 km/h',
            isCorrect: true
        }, {
            id: '3',
            text: '110 km/h'
        }]
    },
    {
        id: '6',
        text: 'Czy w tej sytuacji macie prawo zatrzymać pojazd za znakiem w celu wysadzenia pasażera?',
        imgSrc: img6,
        description: "Pod znakiem B-36 “zakaz zatrzymywania się” umieszczona jest tabliczka T-25C, która jest odwołaniem znaku zakazu. Tabliczki T-25 mówią nam T-25A – początek zakazu wyrażonego znakiem, T-25B – kontynuacja zakazu wyrażonego znakiem, no i wspomniana T-25C odwołująca zakaz.",
        answers: [{
            id: '1',
            text: 'TAK',
            isCorrect: true
        }, {
            id: '2',
            text: 'NIE'
        },]
    },
    {
        id: '7',
        text: 'Czy ten znak poziomy zabrania zmiany pasa ruchu?',
        imgSrc: img7,
        description: "Tak, widoczna linia pojedyncza ciągła zabrania przejeżdżania przez nią. Linia pojedyncza ciągła oddziela pasy ruchu o tym samym kierunku i oznacza ponadto zakaz przejeżdżania przez tę linię i najeżdżania na nią.",
        answers: [{
            id: '1',
            text: 'TAK',
            isCorrect: true
        }, {
            id: '2',
            text: 'NIE'
        },]
    },
    {
        id: '8',
        text: 'Czy zmieniając nieznacznie tor jazdy pojazdu w obrębie dotychczas zajmowanego pasa ruchu, macie obowiązek sygnalizować to wcześniej kierunkowskazem?',
        imgSrc: img8,
        description: "Sygnalizować kierunkowskazem należy zamiar zmiany pasa ruchu i zamiar zmiany kierunku jazdy. Przepisy nie nakazują sygnalizowania nieznacznej zmiany toru jazdy, gdy na przykład delikatnie omijasz dziurę w nawierzchni jezdni.",
        answers: [{
            id: '1',
            text: 'TAK'
        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '9',
        text: 'Czy w tej sytuacji, podczas postoju uszkodzonego pojazdu poza obszarem zabudowanym, macie obowiązek umieścić ostrzegawczy trójkąt odblaskowy bezpośrednio za pojazdem lub na nim?',
        imgSrc: img9,
        description: "Tylko w obszarze zabudowanym należy umieszczać trójkąt bezpośrednio za pojazdem lub na nim. Kierujący pojazdem jest obowiązany sygnalizować postój pojazdu silnikowego lub przyczepy z powodu uszkodzenia lub wypadku poza obszarem zabudowanym, w razie postoju na jezdni w miejscu, w którym jest to zabronione, a na poboczu, jeżeli pojazd nie jest widoczny z dostatecznej odległości, W pozostałych sytuacjach należy sygnalizować.",
        answers: [{
            id: '1',
            text: 'TAK',

        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '10',
        text: 'Czy na tej drodze zawsze macie obowiązek ustąpić pierwszeństwa pieszemu?',
        imgSrc: img10,
        description: "W strefie ruchu, występują drogi publiczne i przynajmniej jedna z dróg jest drogą wewnętrzną. Administrator sam ustala organizację ruchu na tym obszarze. Może więc uznać, że jedna droga jest drogą z pierwszeństwem, a inna podporządkowaną. W strefie ruchu pieszy będzie miał pierwszeństwo wyłącznie jeśli ruch będzie odbywał się na tych samych płaszczyznach, np. parkingi przed hipermarketami. W pytaniu pojawia się jednak zapytanie “czy zawsze?”. Oczywiście, że nie zawsze.",
        answers: [{
            id: '1',
            text: 'TAK'
        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '11',
        text: 'Czy macie obowiązek bezwarunkowo zatrzymać pojazd przed linią złożoną z trójkątów?',
        imgSrc: img11,
        description: "Nie, ponieważ nie jest to linia bezwzględnego zatrzymania. Jest to oznakowanie nakazujące ustąpienia pierwszeństwa. Jeżeli nikt nie będzie jechał drogą z pierwszeństwem to nie musimy się tu zatrzymywać.",
        answers: [{
            id: '1',
            text: 'TAK'
        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '12',
        text: 'Jaką funkcję spełnia system przeciwblokujący (ABS)?',
        imgSrc: img12,
        description: "",
        answers: [{
            id: '1',
            text: 'Skraca drogę hamowania w każdych warunkach.'
        }, {
            id: '2',
            text: 'Zapobiega zerwaniu przyczepności opon podczas przyspieszania.'
        }, {
            id: '3',
            text: 'Ułatwia omijanie przeszkód w czasie hamowania.',
            isCorrect: true
        }]
    },
    {
        id: '13',
        text: 'Co jest celem gry pt. "Poruszanie się po polskich drogach"?',
        imgSrc: img13,
        description: "Zawsze podczas jazdy najważniejsze jest bezpieczeństwo i o tym musimy pamiętać.",
        answers: [{
            id: '1',
            text: 'Ustanowienie jak największej liczby martwych punktów.'
        }, {
            id: '2',
            text: 'Zbieranie ujemnych punktów karnych.'
        }, {
            id: '3',
            text: 'Poznanie funkcji systemu detekcji martwego pola.',

        }, {
            id: '4',
            text: 'Bezpieczny powrót do domu.',
            isCorrect: true
        }]
    },
    {
        id: '14',
        text: 'Czy można w Polsce legalnie korzystać z antyradarów?',
        imgSrc: img14,
        description: "Antyradar RST to kodeks drogowy, który każdy kierowca powinien znać aby, stosując się do przepisów, jeździć bezpiecznie.",
        answers: [{
            id: '1',
            text: 'Nie - korzystanie z każdego antyradaru jest zabronione.'
        }, {
            id: '2',
            text: 'Tak - korzystanie z Antyradaru RST jest dozwolone.',
            isCorrect: true
        }]
    },

]





