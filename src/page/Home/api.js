import request from '../../utils/api/index';

const showHelloApi = (name) => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      const resJson = { infoAsync: 'Async loading' };
      resJson.name = name;
      resolve(resJson);
    }, 1000);
  });
  return result;
};

const showMoviesApi = () => request({
  url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
  crossOrigin: true,
});

export { showHelloApi, showMoviesApi };
