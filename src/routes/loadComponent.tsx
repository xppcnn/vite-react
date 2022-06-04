import loadable from '@loadable/component';
import { ReactElement } from 'react';
import { loadComponentProps } from './types';

// 读取pages下所有tsx文件
const modules = import.meta.glob('../pages/*/*.tsx');

// 动态import文件
function LoadableCom(props: loadComponentProps): ReactElement {
  const component = `/pages${props.pageUrl}/`;
  const LoadableBar: any = loadable(async () => {
    try {
      // 路由动态导入
      for (const path in modules) {
        if (path.indexOf(component) !== -1) {
          return modules[path]() as any;
        }
      }
    } catch (error) {
      // 无法捕获loadable中的错误， 需要用ErrorBoundary捕获
      console.log(
        '🚀 ~ file: loadCom.tsx ~ line 19 ~ constLoadableBar:any=loadable ~ error',
        error
      );
    }
  });

  return <LoadableBar />;
}

export default LoadableCom;
