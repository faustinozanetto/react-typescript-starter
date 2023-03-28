import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Could not find root element in index.html!');

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
