/**
 * Created by spider on 7/11/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import {NavBar, Icon} from 'antd-mobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onLeftClick = ::this.onLeftClick;
  }

  onLeftClick() {
    console.log('onLeftClick');
  }

  onSearchClick() {
    console.log('onSearchClick');
  }

  onEllClick() {
    console.log('onEllClick');
  }

  render() {
    const rigthContent = [
      <Icon key="0" type="search" style={{marginRight: '0.32rem'}} onClick={this.onSearchClick}/>,
      <Icon key="1" type="ellipsis" onClick={this.onEllClick}/>,
    ];
    return (
      <div className="header">
        <div>
          <NavBar
            leftContent="返回"
            mode="light"
            onLeftClick={this.onLeftClick()}
            rightContent={rigthContent}
          >
            Home
          </NavBar>
        </div>
      </div>
    );
  }
}

export default Header;
