/**
 * Created by spider on 6/25/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import Header from '../../../components/Header';

class OrderDetail extends React.Component {
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

export default OrderDetail;