import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import ModulesProviders from './modules/providers';
import { QueryClient, QueryClientProvider } from 'react-query';

import './style.scss';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'core-js/es/array';
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
