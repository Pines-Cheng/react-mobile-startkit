/**
 * Created by spider on 6/26/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/menu';
import '../css/common.less';
// import 'antd-mobile/dist/antd-mobile.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-wrap">
        <div className="main-wrap">
          {this.props.children}
        </div>
        <div className="footer-wrap">
          <Footer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
