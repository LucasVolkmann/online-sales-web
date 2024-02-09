import './main.css';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { DataContextProvider } from './shared/hooks/useDataContext';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </GlobalProvider>
  </Provider>,
);
