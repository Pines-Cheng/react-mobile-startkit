/**
 * Created by spider on 4/26/17.
 */
/**
 * Created by spider on 8/5/16.
 */
/**
 * 封装了fetch,添加了超时处理,访问后台数据自带cookie,
 * 一些默认配置及get,post中无效数据的过滤.
 * */
import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';
import {Toast} from 'antd-mobile';

function sysError(message) {
  Toast.fail(message, 1);
}

function RedirectToLogin() {
  console.log('未登录');
}

// 设置超时
const setPromiseTimeout = function (promise, ms) {
  if (ms === false) {
    return promise;
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tip.danger({children: "请求超时"});
      reject(new Error('request timeout'));
    }, ms);
    promise.then(resolve, reject);
  });
};

const param = function (obj) {
  // encodeURIComponent
  const params = [];
  for (const index in obj) {//eslint-disable-line
    params.push([encodeURIComponent(index), '=', encodeURIComponent(obj[index])].join(''));
  }
  return params.join('&').replace(/%20/g, '+');
};

const processResponse = function (promise, url, sucCode, config) {
  const color = 'color: #8a6d3b;';
  return setPromiseTimeout(promise, config.options.timeout).then((res) => {
    // 处理失败与成功
    if (res.ok) {
      return res.json();
    }
    // 后台出现错误,直接报错。
    console.error('服务器忙,请稍后重试');
    sysError(`服务器错误:${res.status}${res.statusText}`);
    return Promise.reject(new Error(`服务器错误:${res.status}${res.statusText}`, res));
  }).then((rsp) => {
    // console.log(config);
    // debugger
    if (config.options.jsonp) {
      return JSON.parse(rsp);
    }
    return rsp;
  }).then((rsp) => {
    // 处理状态码
    if (rsp.code === 401) {
      console.log('请先登录');
      RedirectToLogin();
      return Promise.reject(new Error(rsp.message || '未知错误'));
    } else if (rsp.code === 200) {
      sysError(rsp.message);
      return rsp;
    }
    if (rsp.code === 405 || rsp.code === 404 || rsp.code === 110 || rsp.code === 525 || rsp.code === 250) {
      if (rsp.message.indexOf('notify') > 0) { // 针对公告详情特殊删除时的情况
        sysError(rsp.message);
      }
      return rsp;
    }
    return Promise.reject(new Error(rsp.message || '未知错误'));
  })
    .then((json) => {
      if (!json) {
        return false;
      }
      if (json.code > -1) { // 获取数据成功
        return json;
      }
      console.log('%c*** Request url: %s、code: %s、message: %s', color, url, json.code, json.message);
      return Promise.reject(new Error(json.message || '未知错误'));
    })
    .catch((reason) => {
      // reason 有点复杂，各种实现，碰到一个解决一个吧
      if (toString.call(reason) === '[object Promise]') {
        return reason.catch((rea) => {
          console.error('%c*** Request catch %s', color, rea);
          // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
          return Promise.reject(new Error(`${rea}`));
        });
      } else if (reason === 'request timeout') {
        console.error('%c*** Request catch %s', color, reason);
        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
        return Promise.reject(new Error(`${reason}`));
      }
      console.error('%c*** Request catch %s', color, reason);
      // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
      return Promise.reject(new Error(`${reason}`));
    });
};

// 设置Request
const Request = function (url, options) {
  this.data = {};
  this.url = url;
  this.sucCode = [0];
  /*
   /***用extendObeject较慢(耗时多了一倍以上)，所以再有headers的时候再用。普通的还是用下面的浅拷贝***
   /---by max
   */
  if (options && options.headers) {
    this.options = Object.assign({
      timeout: 40000, // number or false
      method: 'get',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'same-origin' // 需要设置才能获取cookie //same-origin 相同站点
      // ,mode:"no-cors"    //据说加了这个可以跨域。。但是没什么卵用
    }, options);
  } else {
    this.options = Object.assign({
      timeout: 40000, // number or false
      method: 'get',
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'same-origin' // 需要设置才能获取cookie //same-origin 相同站点
      // ,mode:"no-cors"    //据说加了这个可以跨域。。但是没什么卵用
    }, options);
  }
};
Request.prototype = {
  code(codes) {
    if (Array.isArray ? Array.isArray(codes) : Object.prototype.toString.call(codes) === '[object Array]') {
      this.sucCode = this.sucCode.concat(codes);
    } else {
      this.sucCode.push(codes);
    }
    return this;
  },
  timeout(timeout) {
    Object.assign(this.options, {
      timeout
    });
    return this;
  },
  data(_data) {
    // 过滤null  undefined 只Object 类型。
    if (Object.prototype.toString.call(_data) === '[object Object]') {
      this.data = {};
      for (const index in _data) { //eslint-disable-line
        if (_data[index] !== null && _data[index] !== undefined) {
          this.data[index] = _data[index];
        }
      }
    }
    return this;
  },
  json(_data) {
    this.data = JSON.stringify(_data);
    return this;
  },
  getConfig() {
    const t = this;
    return {
      url: t.url,
      data: t.data,
      sucCode: t.sucCode,
      options: t.options
    };
  },
  setConfig(d) {
    const t = this;
    t.url = d.url;
    t.data = d.data;
    t.sucCode = d.sucCode;
    t.options = d.options;
  },
  get() {
    const t = this;
    // 生成唯一请求
    t.data.t = new Date().getTime();
    const p = param(t.data);
    let newUrl = t.url + (t.url.indexOf('?') > -1 ? '&' : '?') + p;
    if (t.options.cors) {
      t.options.credentials = 'include'; // fetch中的参数是这个
      newUrl = `${newUrl + (newUrl.indexOf('?') > -1 ? '&' : '?')}file_token=${window.SYSTEM.file_token}`;
    }

    if (t.options.jsonp) {
      return processResponse(fetchJsonp(newUrl, t.options), t.url, t.sucCode, t.getConfig());
    }
    return processResponse(fetch(newUrl, t.options), t.url, t.sucCode, t.getConfig());
  },
  post() {
    const t = this;
    const data = t.data;
    let body;
    t.options.method = 'post';
    t.options.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    let newUrl = t.url;

    // 跨域请求cors 需要带上 cookie 进行认证否则会出现会话过期提示
    if (t.options.cors) {
      t.options.credentials = 'include'; // fetch中的参数是这个
      newUrl = `${newUrl + (t.url.indexOf('?') > -1 ? '&' : '?')}file_token=${window.SYSTEM.file_token}`;
    }

    // t.options.headers["Content-Type"] = "application/json";
    // 兼容传[json string] [formData] 的情况,暂时这两种. 其他的看情况
    if (Object.prototype.toString.call(data) === '[object Object]') {
      // body = new FormData();
      // for (var e in data) {
      //     body.append(e, data[e]);
      // }
      body = param(t.data);
    } else {
      // 传入json string
      console.warn(data);
      // t.options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      t.options.headers['Content-Type'] = 'application/json';
      body = data;
    }
    t.options.body = body;
    return processResponse(fetch(newUrl, t.options), newUrl, t.sucCode, t.getConfig());
  }
};

const RequestFactory = function (url, options) {
  return new Request(url, options);
};

export default RequestFactory;
