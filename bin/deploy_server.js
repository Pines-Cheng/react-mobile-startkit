/**
 * Created by spider on 6/22/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
import express from 'express';
import path from 'path';
import config from '../src/config';

const rootPath = path.resolve(__dirname, '../');
const app = express();

// 设置静态资源目录
app.use('/dist', express.static('/'));

app.get('/index*', (req, res) => {
  res.sendFile(path.join(rootPath, 'index.html'));
});

app.listen(config.port, (err) => {
  if (err) {
    console.error(`=> OMG!!! 🙀 ${err}`);
  } else {
    console.info('==> 🚧  Webpack development server listening at http://%s:%s', config.host, config.port);
  }
});
