import dva from 'dva';
import { Toast } from 'antd-mobile';
import createLoading from 'dva-loading';
import router from './router';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize 默认为hashHistory
const app = dva({
  onError(e) {
    Toast.fail(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model


// 4. Router
app.router(router);

// 5. Start
app.start('#container');
