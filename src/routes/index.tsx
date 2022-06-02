import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import App from '../App';
import Home from '@pages/Home';

const My = loadable(() => import('@pages/My'), { fallback: <div>....</div> });

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
}
