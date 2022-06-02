/**
 * 判断是否为手机端
 * @returns
 */
export function isMobile(): boolean {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag === null;
}

/**
 * 判断是否为小程序webview
 * @returns
 */
export const isInWeChatMP = (): boolean => {
  const flag =
    // @ts-ignore
    navigator.userAgent.match(/miniprogram/i) || window.__wxjs_environment === 'miniprogram';
  return flag === null;
};

/**
 * 判断是否为微信浏览器
 * @returns
 */
export const isWX = (): boolean => {
  const ua = navigator.userAgent.toLowerCase();
  // @ts-ignore
  return ua.match(/MicroMessenger/i) === 'micromessenger';
};

/**
 * bs64转blob
 */

export const bs64ToBlob = (data: string, type = 'image/jpeg') => {
  const bstr = atob(data);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type });
};

/**
 * blob转bs64
 * @param blob
 */
export const blobToBs64 = (blob: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
};

/**
 * url转bs64
 * @param url
 */

export const urlToBs64 = (url: string) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        blobToBs64(xhr.response).then((res) => {
          resolve(res);
        });
      }
    };
    xhr.send();
  });
};
