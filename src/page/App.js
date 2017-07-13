/**
 * Created by spider on 6/26/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import '../css/common.less';
import Header from '../components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-wrap">
        <div className="mai-wrap">
          <Header/>
          {this.props.children}
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
