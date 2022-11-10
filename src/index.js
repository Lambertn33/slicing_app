import React from "react";
import  ReactDOM  from "react-dom";
import {createRoot} from 'react-dom/client';
import App from './components/App';

import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>, 
)