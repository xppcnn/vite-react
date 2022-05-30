import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import AppRouter from './routes';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
