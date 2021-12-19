import { useState } from 'react'
import { Button } from 'antd-mobile'
import { useSelector, useDispatch, RootState } from './store';
import { toggleMenusCollapsed } from './store/slice/demo.slice';
import logo from './logo.svg'
import './App.less'

function App() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const { collapsed } = useSelector((state: RootState) => state.demo);

  console.log(collapsed);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button  onClick={() => dispatch(toggleMenusCollapsed())}>
            count is: {collapsed}
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
