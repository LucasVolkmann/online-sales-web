import './main.css';

import ReactDOM from 'react-dom/client';

import App from './App';
import { DataContextProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </GlobalProvider>,
);
