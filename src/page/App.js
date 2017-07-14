/**
 * Created by spider on 6/26/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.less';
import FooterBar from '../components/FooterBar';

// 匹配到的路由，显示FooterBar
const FOOTERBAR_DISPLAY_MAP = [
  '/home',
  '/product/list',
  '/order/list',
  '/message/list',
  '/user'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.location);
    const pathname = this.props.location.pathname;
    return (
      <div className="app-wrap">
        {
          // 控制FooterBar的显示隐藏
          FOOTERBAR_DISPLAY_MAP.indexOf(pathname) >= 0 ?
            <div className="content-wrap" style={{height: '100%'}}>
              {
                React.cloneElement(this.props.children, Object.assign({
                  // key必须单独传,否则会有警告 https://gist.github.com/jimfb/fb2a04fe3fa4637d7d62
                  key: pathname
                }, this.props))
              }
              <FooterBar push={this.props.history.push}/>
            </div>
            :
            <div className="content-wrap">
              {
                React.cloneElement(this.props.children, Object.assign({
                  key: pathname
                }, this.props))
              }
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
