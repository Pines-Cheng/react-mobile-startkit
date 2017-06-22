import React from 'react';
import PropTypes from 'prop-types';
import {renderRoutes} from '../../routes';

const App = ({route}) => {
  require('../../css/main.scss');
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

App.propTypes = {
  route: PropTypes.object.isRequired,
};

export default App;
