/**
 * Created by spider on 6/26/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/common.less';
import FooterBar from '../components/FooterBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-wrap">
        <div className="main-wrap">
          {
            this.props.params ?
              <FooterBar push={this.props.history.push}>
                {
                  React.cloneElement(this.props.children, Object.assign({
                    // key必须单独传,否则会有警告
                    // https://gist.github.com/jimfb/fb2a04fe3fa4637d7d62
                    key: this.props.location.pathname
                  }, this.props))
                }
              </FooterBar>
              :
              React.cloneElement(this.props.children, Object.assign({
                key: this.props.location.pathname
              }, this.props))
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
