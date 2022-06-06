import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import './index.less';
import AppRouter from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
