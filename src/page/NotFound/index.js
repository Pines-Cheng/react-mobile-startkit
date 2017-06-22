import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

const NotFound = () => {
  const pageTitle = `404 not found - ${config.app.title}`;
  const styles = require('./styles.css');

  return (
    <div className={styles.notFound}>
      <Helmet title={pageTitle} />
      <h1>404</h1>
      <p>This is not the web page you are looking for.</p>
    </div>
  );
};

export default NotFound;
