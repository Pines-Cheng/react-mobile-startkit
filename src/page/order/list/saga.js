/**
 * Created by spider on 17/7/20.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */

import pathToRegexp from 'path-to-regexp';
import {getOrderList} from '../../../service/getData';

export default {
  namespace: 'order/list',
  state: {
    orderList: {},
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        const match = pathToRegexp('/order/list').exec(pathname);
        if (match) {
          dispatch({type: 'fetchOrderList'}); // dispatch 执行effects
        }
      });
    },
  },
  effects: {
    * fetchOrderList({payload}, {call, put}) {
      const rsp = yield call(getOrderList);  // call 获取后台请求
      console.log(rsp);
      yield put({type: 'saveOrderList', payload: rsp.data.items}); // put 更新reducers
    },
  },
  reducers: {
    saveOrderList(state, {payload: items}) {
      return {...state, orderList: items};
    },
  },
};
