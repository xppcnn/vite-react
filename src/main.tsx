import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './index.less'
import { rootStore } from './store'
import AppRouter from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
