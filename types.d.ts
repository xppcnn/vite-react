declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.md' {
  const content: string;
  export default content;
}
