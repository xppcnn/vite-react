import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

export interface RouteItem {
  path: string; // 路由路径
  id: string; // 路由id
  component: ReactElement; // 路由组件
  parentId?: string; // 父路由id
  auth?: boolean; // 是否需要权限
  fallback?: boolean; // 是否懒加载
}

export interface IRouteObject extends RouteObject {
  id: string;
  parentId?: string;
}

export interface loadComponentProps {
  pageUrl: string; // 页面目录url
}
