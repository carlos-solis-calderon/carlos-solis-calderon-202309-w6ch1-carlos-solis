import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import './style.scss';
import { Provider } from 'react-redux';
import { store } from './core/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
