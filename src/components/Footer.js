import React from 'react';
// import PropTypes from 'prop-types';
import {TabBar, Icon} from 'antd-mobile';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
    };
    this.handleTabChange = ::this.handleTabChange;
  }

  handleTabChange(e) {
    this.setState({
      selectedTab: 'redTab',
    });
    console.log('onTabChange', e);
  }

  render() {
    console.log(TabBar);
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          key="首页"
          title="首页"
          id='home'
          icon={<div style={{background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}/>}
          selectedIcon={<div style={{
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'home'}
          badge={1}
          onPress={this.handleTabChange}
          data-seed="logId"
        />
        <TabBar.Item
          key="商品"
          title="口碑"
          icon={<Icon
            type="koubei-o"
            size="md"
          />}
          selectedIcon={<Icon
            type="koubei"
            size="md"
          />}
          badge={'new'}
          selected={this.state.selectedTab === 'product'}
          onPress={this.handleTabChange}
          data-seed="logId1"
        />
        <TabBar.Item
          key="订单"
          title="订单"
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
          }
          dot
          selected={this.state.selectedTab === 'order'}
          onPress={this.handleTabChange}
        />
        <TabBar.Item
          key="消息"
          title="消息"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          selected={this.state.selectedTab === 'message'}
          onPress={this.handleTabChange}
        />
        <TabBar.Item
          key="我的"
          title="我的"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          selected={this.state.selectedTab === 'user'}
          onPress={this.handleTabChange}
        />
      </TabBar>
    );
  }
}

export default Footer;
