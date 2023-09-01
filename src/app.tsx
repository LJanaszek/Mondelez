import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { getHomeRoute, getGamePageRoute, getRulesPageRoute, getPolicyRoute, getTaskZero, getQuizOne, getQuizTwo, getRide } from './routes/routes';
import React, { Suspense } from 'react';
import { Loader } from './molecules/loader/loader';
import { PageHeader } from './components/layout/header/page-header';
import { useMainModuleState } from './modules/main';
import { PageFooter } from './components/layout/footer/page-footer';
import PolicyPage from './routes/policy';
import { useEffect } from 'react';
import { CONFIG_MODULE_ACTION, useConfigModuleDispatch } from './modules/config';
import { CookiesInfoComponent } from './components/layout/cookies';

const HomePage = React.lazy(() => import('./routes/home'));
const GamePage = React.lazy(() => import('./routes/game'));
const RulesPage = React.lazy(() => import('./routes/rules/rules'));
const TaskZero = React.lazy(() => import('./routes/task-0/task'));
const QuizOne = React.lazy(() => import('./routes/quiz-1/quiz'));
const QuizTwo = React.lazy(() => import('./routes/quiz-2/quiz'));
const Ride = React.lazy(() => import('./routes/ride/ride'));

export default function App() {
    // window.location.reload()
    const { showHeader } = useMainModuleState();

    return (
        <>
            <BrowserRouter>
                <CookiesInfoComponent />
                <main aria-live="polite">
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={getHomeRoute()} element={<HomePage />} />
                            <Route path={getRulesPageRoute()} element={<RulesPage />} />
                            <Route path={getGamePageRoute()} element={<GamePage />} />
                            <Route path={getTaskZero()} element={<TaskZero />} />
                            <Route path={getQuizOne()} element={<QuizOne />} />
                            <Route path={getQuizTwo()} element={<QuizTwo />} />
                            <Route path={getRide()} element={<Ride />} />
                            <Route path={getPolicyRoute()} element={<PolicyPage />} />
                            <Route path={'/debug-on'} element={<DebugOn />} />
                            <Route path={'/debug-off'} element={<DebugOff />} />
                            <Route element={<HomePage />} />
                        </Routes>
                    </Suspense>
                </main>
            </BrowserRouter>
        </>
    )
}


function DebugOn() {
    const navigate = useNavigate();
    const dispatch = useConfigModuleDispatch();

    useEffect(() => {
        dispatch({
            type: CONFIG_MODULE_ACTION.SET_DEBUG,
            payload: true
        });

        navigate(getHomeRoute(), { replace: true });
    }, [navigate, dispatch]);

    return <></>
}


function DebugOff() {
    const navigate = useNavigate();
    const dispatch = useConfigModuleDispatch();

    useEffect(() => {
        dispatch({
            type: CONFIG_MODULE_ACTION.SET_DEBUG,
            payload: false
        });

        navigate(getHomeRoute(), { replace: true });
    }, [navigate, dispatch]);

    return <></>
}
