/**
 * @description 将向后台请求数据的方法全部封装在这里
 * Created by spider on 17/7/14.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */

import Request from './Request';

/**
 * 地址
 */


/**
 * 订单和退单
 */

/**
 * 部门和区域
 */

const customRegionList = (params = {}) => Request('/app/cart?action=count').data(params).get();

/**
 * 公共接口
 */

/**
 * 客户
 */

/**
 * 员工账号
 */
const companyUserList = (params = {}) => Request('/app/showstylePage?page=INDEX').data(params).get();

/**
 * 促销和广告
 */

/**
 * 商品
 */
const productList = (params = {}) => Request('/app/goods?action=goodsSummary').data(params).get();


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

customRegionList();

export {
  customRegionList,
  companyUserList,
  productList
};
