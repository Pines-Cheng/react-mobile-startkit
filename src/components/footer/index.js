import React from 'react';
// import PropTypes from 'prop-types';
import {TabBar, Icon} from 'antd-mobile';
import './style.scss';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  handleTabChange() {
    this.setState({
      selectedTab: 'redTab',
    });
    console.log('onTabChange');
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
          key="生活"
          title="生活"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={this.handleTabChange}
          data-seed="logId"
        />
        <TabBar.Item
          key="口碑"
          icon={<Icon
            type="koubei-o"
            size="md"
          />}
          selectedIcon={<Icon
            type="koubei"
            size="md"
          />}
          title="口碑"
          badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={this.handleTabChange()}
          data-seed="logId1"
        />
        <TabBar.Item
          key="朋友"
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
          title="朋友"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={this.handleTabChange()}
        />
        <TabBar.Item
          key="我的"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={this.handleTabChange()}
        />
      </TabBar>
    );
  }
}

export default Footer;
