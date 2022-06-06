import BaseLayout from '@/layouts/baseLayout';
import LoadableCom from './loadComponent';
import { RouteItem } from './types';

export const routeConfig: RouteItem[] = [
  {
    path: '/',
    id: '0',
    component: <LoadableCom pageUrl="/My" />
  },
  {
    path: '',
    id: '2',
    component: <BaseLayout />
  },
  {
    path: 'home',
    id: '2-1',
    parentId: '2',
    component: <LoadableCom pageUrl="/Home" />
  },
  {
    path: 'my',
    id: '2-2',
    parentId: '2',
    component: <LoadableCom pageUrl="/My" />
  },
  {
    path: '*',
    id: '404',
    component: <LoadableCom pageUrl="/NotFound" />
  }
];
