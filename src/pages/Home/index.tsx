import { memo, useEffect } from 'react';
import { Button } from 'antd-mobile';
import shallow from 'zustand/shallow';
import useStore from '@stores/index';
import { UserProps } from '@stores/type';
import styles from './index.module.less';
import request from '@/utils/request';
import useRequest from '../../hooks/useRequest';
interface User {
  title: string;
  titleEn: string | null;
  type: number;
  children: any[];
}
const Home = () => {
  const { count, dec } = useStore(
    (state: UserProps) => ({ count: state.count, dec: state.dec }),
    shallow
  );
  useEffect(() => {
    request<User>({
      url: '/product/queryHomePageGoods',
      method: 'GET',
      params: {
        categoryId: 10,
        type: 1
      }
    })
      .then((response) => {
        console.log('🚀 ~ file: index.tsx ~ line 29 ~ useEffect ~ response', response);
      })
      .catch((error) => {
        console.log('🚀 ~ file: index.tsx ~ line 32 ~ useEffect ~ error', error);
      });
  }, []);

  return (
    <div className={styles.home}>
      {/* <div>{data?.title}</div> */}
      <Button onClick={dec}></Button>
    </div>
  );
};

export default memo(Home);
