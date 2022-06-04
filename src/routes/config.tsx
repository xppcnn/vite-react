import LoadableCom from './loadComponent';
import { RouteItem } from './types';

export const routeConfig: RouteItem[] = [
  {
    path: '/',
    id: '0',
    component: <LoadableCom pageUrl="/My" />
  },

  {
    path: 'home',
    id: '1',
    component: <LoadableCom pageUrl="/Home" />
  },
  {
    path: 'my',
    id: '1-1',
    parentId: '1',
    component: <LoadableCom pageUrl="/My" />
  },
  {
    path: '*',
    id: '404',
    component: <LoadableCom pageUrl="/NotFound" />
  }
];
