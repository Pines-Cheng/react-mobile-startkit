/**
 * Created by spider on 6/25/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import {Router, Route, IndexRedirect} from 'dva/router';
import App from './page/App';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

const NotFound = (location, cb) => require.ensure([], () => cb(null, require('./components/NotFound').default), 'NotFound');
const Home = (location, cb) => require.ensure([], () => cb(null, require('./page/home').default), 'Home');

// 订单
const OrderList = (location, cb) => require.ensure([], () => cb(null, require('./page/order/list').default), 'OrderList');
const OrderDetail = (location, cb) => require.ensure([], () => cb(null, require('./page/order/detail').default), 'OrderDetail');
const OrderProductList = (location, cb) => require.ensure([], () => cb(null, require('./page/order/product_list').default), 'OrderProductList');

// 客户
const CustomerDetail = (location, cb) => require.ensure([], () => cb(null, require('./page/customer/detail').default), 'CustomerDetail');

// 商品
const ProductList = (app, location, cb) => require.ensure([], () => {
  registerModel(app, require('./page/product/list/saga').default);
  cb(null, require('./page/product/list').default);
}, 'ProductList');
const ProductDetail = (location, cb) => require.ensure([], () => cb(null, require('./page/product/detail').default), 'ProductDetail');

// 消息
const MessageList = (location, cb) => require.ensure([], () => cb(null, require('./page/message/list').default), 'MessageList');

// 用户
const UserAccount = (location, cb) => require.ensure([], () => cb(null, require('./page/user/account').default), 'UserAccount');


export default function ({history, app}) { //eslint-disable-line
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home"/>
        <Route path="home" getComponent={Home}/>
        <Route path="order">
          <IndexRedirect to="/order/list"/>
          <Route path="list" getComponent={OrderList}/>
          <Route path="detail" getComponent={OrderDetail}/>
          <Route path="product_list" getComponent={OrderProductList}/>
        </Route>
        <Route path="customer">
          <IndexRedirect to="/customer/detail"/>
          <Route path="detail" getComponent={CustomerDetail}/>
        </Route>
        <Route path="product">
          <IndexRedirect to="/product/list"/>
          <Route path="list" getComponent={ProductList.bind(this,app)}/>
          <Route path="detail" getComponent={ProductDetail}/>
        </Route>
        <Route path="message">
          <IndexRedirect to="/message/list"/>
          <Route path="list" getComponent={MessageList}/>
        </Route>
        <Route path="user">
          <IndexRedirect to="/user/account"/>
          <Route path="account" getComponent={UserAccount}/>
        </Route>
        <Route path="*" getComponent={NotFound}/>
      </Route>
    </Router>
  );
}

