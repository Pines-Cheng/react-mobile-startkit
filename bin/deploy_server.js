/**
 * Created by spider on 6/22/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 * @description 在本地查看生产环境的代码
 */
import express from 'express';
// import path from 'path';
import config from '../config/config';

// const rootPath = path.resolve(__dirname, '../');
const app = express();

// 设置静态资源目录
app.use(express.static('dist'));

console.log(config.port, process.env.PORT);

app.listen(config.port, (err) => {
  if (err) {
    console.error(`=> OMG!!! 🙀 ${err}`);
  } else {
    console.info('==> 🚧 listening at http://%s:%s', config.host, config.port);
  }
});
