/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Component, ErrorInfo } from 'react';

interface IState {
  hasError: boolean;
  errorTip?: string;
}
class ErrorBoundary extends Component {
  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  state: IState = {
    hasError: false,
    errorTip: '你弄啥了？ 未知错误'
  };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    let tip = '你弄啥呢？';
    if (errorInfo.componentStack.indexOf('LoadableCom') > -1) {
      tip = '额， 大概是路由配置的pageUrl出错了吧';
    }
    if (error.toString().indexOf('routerId error') > -1) {
      tip = '额， 大概是路由id问题';
    }
    this.setState({ errorTip: tip });
  }

  render() {
    const { hasError, errorTip } = this.state;
    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>{errorTip}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
