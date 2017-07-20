/**
 * Created by spider on 17/7/20.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */

import pathToRegexp from 'path-to-regexp';
import {getProductList} from '../../../service/getData';

export default {
  namespace: 'product/list',
  state: {
    productList: {},
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(({pathname}) => {
        const match = pathToRegexp('/product/list').exec(pathname);
        if (match) {
          dispatch({type: 'fetchProductList'}); // dispatch 执行effects
        }
      });
    },
  },
  effects: {
    * fetchProductList({payload}, {call, put}) {
      const rsp = yield call(getProductList);  // call 获取后台请求
      console.log(rsp);
      yield put({type: 'saveProductList', payload: rsp.data.items}); // put 更新reducers
    },
  },
  reducers: {
    saveProductList(state, {payload: items}) {
      return {...state, productList: items};
    },
  },
};
