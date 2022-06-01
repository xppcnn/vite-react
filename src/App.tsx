import { Button } from 'antd-mobile';
import shallow from 'zustand/shallow';
import useStore from '@stores/index';
import { UserProps } from '@stores/type';
import useRequest from '@hooks/useRequest';
import Home from './pages/Home/index';
import './App.less';

interface User {
  title: string;
  titleEn: string | null;
  type: number;
  children: any[];
}

function App() {
  const { count, add } = useStore(
    (state: UserProps) => ({ count: state.count, add: state.add }),
    shallow
  );
  const { data, error, response } = useRequest<User>({
    url: '/product/queryHomePageGoods',
    params: { categoryId: 1000, type: 1 }
  });

  console.log('🚀 ~ file: App.tsx ~ line 14 ~ App ~ data, error ', data, error, response);
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={add}>count is: {count}</Button>
        </p>
        {/* <p>{data?.type}</p> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
