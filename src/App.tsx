import { useState, useEffect } from 'react'
import { Button } from 'antd-mobile'
import userStore from './store'
import request from '@utils/request'
import logo from './logo.svg'
import './App.less'
interface User {
  type: number;
}
function App() {
  const { count, add } = userStore((state) => ({ ...state }));
  useEffect(() => {
    request<User>({
      url: '/product/queryHomePageGoods',
      method: 'GET',
      params: {
        categoryId: 10000,
        type: 1
      }
    }).then(response => {
      console.log(response.data.type)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button onClick={add}>
              count is: {count}
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>

    </div>
  )
}

export default App
