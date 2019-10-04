import base from './base';

const post = function (url, params, options) {
  return base(Object.assign({
    url,
    method: 'post',
    data: params,
  }, options));
};

export default post;
