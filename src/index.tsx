import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import ModulesProviders from './modules/providers';
import { QueryClient, QueryClientProvider } from 'react-query';

import './style.scss';


import "core-js/stable";
import "regenerator-runtime/runtime";

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
