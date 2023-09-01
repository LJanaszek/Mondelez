import { lazy, Suspense, useCallback } from "react";
import { useMemo } from "react";
import { Loader } from "../../../molecules/loader/loader";
import Box from "../../../components/layout/box/box";
import useFinishGameStep from "../../../modules/game/hooks/use-finish-game-step";
import usePageStep from "../../../modules/game/hooks/use-page-step";

const Page1 = lazy(() => import('./page-1'));
const Page2 = lazy(() => import('./page-2'));
const Page3 = lazy(() => import('./page-3'));
const Page4 = lazy(() => import('./page-4'));
const Page5 = lazy(() => import('./page-5'));
const Page6 = lazy(() => import('./page-6'));
const Page7 = lazy(() => import('./page-7'));
const Page8 = lazy(() => import('./page-8'));
const Page9 = lazy(() => import('./page-9'));
const Page10 = lazy(() => import('./page-10'));
const Page11 = lazy(() => import('./page-11'));
const Page12 = lazy(() => import('./page-12'));
const Page13 = lazy(() => import('./page-13'));
const Page14 = lazy(() => import('./page-14'));
const Page15 = lazy(() => import('./page-15'));
const Page16 = lazy(() => import('./page-16'));
const Page17 = lazy(() => import('./page-17'));
const Page18 = lazy(() => import('./page-18'));
const Page19 = lazy(() => import('./page-19'));
const Page20 = lazy(() => import('./page-20'));
const Page21 = lazy(() => import('./page-21'));
const Page22 = lazy(() => import('./page-22'));
const Page23 = lazy(() => import('./page-23'));
const Page24 = lazy(() => import('./page-24'));
const Page25 = lazy(() => import('./page-25'));
const Page26 = lazy(() => import('./page-26'));
const Page27 = lazy(() => import('./page-27'));
const SummaryPage = lazy(() => import('./summary-page'));
const GameComplete = lazy(() => import('./game-complete'));
const PageTimeEnd = lazy(() => import('./page-time-end'));
const PageMap = lazy(() => import('./page-map'));

type Props = {
    id: string
}

export default function PageView({ id }: Props) {
    // window. = function() {
        // window.location.replace(window.location.href)
    // }
    const finishStep = useFinishGameStep();

    const onNext = useCallback(() => {
        finishStep(id);
    }, [finishStep, id]);

    const page = usePageStep(id);

    const widget = useMemo(() => {

        switch (page?.pageId) {
            case 'page-1':
                return <Page1 onNext={onNext} />
            case 'page-2':
                return <Page2 onNext={onNext} />
            case 'page-3':
                return <Page3 onNext={onNext} />
            case 'page-4':
                return <Page4 onNext={onNext} />
            case 'page-5':
                return <Page5 onNext={onNext} />
            case 'page-6':
                return <Page6 onNext={onNext} />
            case 'page-7':
                return <Page7 onNext={onNext} />
            case 'page-8':
                return <Page8 onNext={onNext} />
            case 'page-9':
                return <Page9 onNext={onNext} />
            case 'page-10':
                return <Page10 onNext={onNext} />
            case 'page-11':
                return <Page11 onNext={onNext} />
            case 'page-12':
                return <Page12 onNext={onNext} />
            case 'page-13':
                return <Page13 onNext={onNext} />
            case 'page-14':
                return <Page14 onNext={onNext} />
            case 'page-15':
                return <Page15 onNext={onNext} />
            case 'page-16':
                return <Page16 onNext={onNext} />
            case 'page-17':
                return <Page17 onNext={onNext} />
            case 'page-18':
                return <Page18 onNext={onNext} />
            case 'page-19':
                return <Page19 onNext={onNext} />
            case 'page-20':
                return <Page20 onNext={onNext} />
            case 'page-21':
                return <Page21 onNext={onNext} />
            case 'page-22':
                return <Page22 onNext={onNext} />
            case 'page-23':
                return <Page23 onNext={onNext} />
            case 'page-24':
                return <Page24 onNext={onNext} />
            case 'page-25':
                return <Page25 onNext={onNext} />
            case 'page-26':
                return <Page26 onNext={onNext} />
            case 'page-27':
                return <Page27 onNext={onNext} />
            case 'summary-page':
                return <SummaryPage onNext={onNext} />
            case 'game-complete':
                return <GameComplete onNext={onNext} />
            case 'page-time-end':
                return <PageTimeEnd onNext={onNext} />
            case 'page-map':
                return <PageMap onNext={onNext}/>
            default:
                return <PagePlaceholder onNext={onNext} />
        }
    }, [page, onNext]);

    return <>
        <Suspense fallback={<Loader />}>
            {widget}
        </Suspense>
    </>
}


function PagePlaceholder({ onNext }: { onNext: () => void }) {
    return <Box>
        <h2>Tu będzie jakaś strona</h2>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
