import useSWR from 'swr';
import request from '@/utils/request';
interface User {
  title: string;
  titleEn: string | null;
  type: number;
  children: any[];
}

const fetcher = (url: string, params: any) =>
  request<User>({
    url,
    method: 'GET',
    params
  })
    .then((response) => {
      console.log('🚀 ~ file: index.tsx ~ line 29 ~ useEffect ~ response', response);
    })
    .catch((error) => {
      console.log('🚀 ~ file: index.tsx ~ line 32 ~ useEffect ~ error', error);
    });

const My = () => {
  const { data, error } = useSWR(
    [
      '/product/queryHomePageGoods',
      {
        categoryId: 10,
        type: 1
      }
    ],
    fetcher
  );
  console.log('🚀 ~ file: index.tsx ~ line 25 ~ My ~ data', data, error);
  return <div>my</div>;
};

export default My;
