/**
 * Created by spider on 6/25/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import Header from '../../../components/Header';
import {connect} from 'dva';
import {getCustomerList} from '../../../service/getData';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header title="商品"/>
        <div>商品列表</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    loading: state.loading.global,
    productList: state.productList
  };
}

export default connect(mapStateToProps)(ProductList);

// export default ProductList;
