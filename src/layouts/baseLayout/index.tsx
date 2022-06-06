import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      <header>12222</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default BaseLayout;
