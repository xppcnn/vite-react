export interface ResponseData<T = any> {
  code: number;
  message?: string;
  msg?: string;
  data: T;
}