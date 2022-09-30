import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './styles/MyThemeProvider';
import AppRoute from './services/routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <AppRoute />
    </MyThemeProvider>
  </React.StrictMode>,
);
