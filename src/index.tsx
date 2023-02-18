import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from '@/store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@/assets/css/index.less';

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'qk-micro-react',
    container: '#qk-micro-react',
    entry: 'http://localhost:3011',
    activeRule: '/qk-micro-react',
  },
  {
    name: 'qk-micro-vue',
    container: '#qk-micro-vue',
    entry: 'http://localhost:3012',
    activeRule: '/qk-micro-vue',
  },
]);

start({
  sandbox: {
    // 样式隔离特性
    experimentalStyleIsolation: true,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
