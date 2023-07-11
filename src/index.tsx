import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import ModulesProviders from './modules/providers';
import { QueryClient, QueryClientProvider } from 'react-query';

import './style.scss';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/array/fill';
import 'core-js/features/object/values'
import 'core-js/features/number/is-nan';
import 'core-js/features/string/starts-with';
import { register } from './serviceWorker';

const queryClient = new QueryClient()
register();


const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ModulesProviders>
                <App />
            </ModulesProviders>
        </QueryClientProvider>
    </React.StrictMode>
);
