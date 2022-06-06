import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routeConfig } from './config';
import { RouteItem, IRouteObject } from './types';

// 删除对象中的component属性
const delComponentInObj = (item: any) => {
  const newObj = { ...item, element: item.component };
  newObj.component = null;
  return newObj;
};

// 生成路由树形结构数据
const generateRouterTree = (data: RouteItem[]) => {
  const map: any = {};
  const tree: any[] = [];
  data.forEach((item: IRouteObject) => {
    if (map[item.id]) {
      throw new Error('routerId error :路由id重复');
    }
    map[item.id] = item;
    item.children = [];
  });
  data.forEach((item: any) => {
    if (item.parentId) {
      if (map[item.parentId]) {
        map[item.parentId].children.push(delComponentInObj(item));
      } else {
        throw new Error('routerId error :路由父级id不存在');
      }
    } else {
      tree.push(delComponentInObj(item));
    }
  });
  return tree; // 返回树形结构数据
};
function GenerRouter() {
  const routerMap = generateRouterTree(routeConfig);
  const element = useRoutes(routerMap);
  return element;
}
export default function AppRouter() {
  return (
    <BrowserRouter>
      <GenerRouter />
    </BrowserRouter>
  );
}
