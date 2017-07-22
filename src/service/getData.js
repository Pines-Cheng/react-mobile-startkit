/**
 * @description 将向后台请求数据的方法全部封装在这里
 * Created by spider on 17/7/14.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */

import Request from './Request';

const initParams = {
  access_token: 'b1c9aeb1dce5eb26672a2d72041276b3'
};

/**
 * 地址
 */


/**
 * 订单和退单
 */
const getOrderList = (params = initParams) => Request('/v2/order/order_all_list').data(params).get();


/**
 * 部门和区域
 */

const getCustomRegionList = (params = initParams) => Request('/crm/company/subuserlist').data(params).get();

/**
 * 公共接口
 */

/**
 * 客户
 */
const getCustomerList = (params = initParams) => Request('/crm/customer/subcustomerlist').data(params).get();

/**
 * 员工账号
 */
const getCompanyUserList = (params = initParams) => Request('/app/showstylePage?page=INDEX').data(params).get();

/**
 * 促销和广告
 */

/**
 * 商品
 */
const getProductList = (params = initParams) => Request('/v2/goods/goods_summary').data(params).get();


/**
 * 出库发货记录
 */

/**
 * 权限
 */

/**
 * 通知公告和消息
 */

/**
 * 新功能和在线帮组
 */

/**
 * CRM
 */


/**
 * 进销存
 */

/**
 * 报表
 */

/**
 * 资金
 */

/**
 * 商品库
 */

/**
 * 应用中心
 */

/**
 * 客户满意度调查
 */

/**
 * 万达
 */

/**
 * 采购管理
 */

export {
  getCustomRegionList,
  getCompanyUserList,
  getProductList,
  getCustomerList,
  getOrderList
};
