import base from './base';

const get = function (url, params, options) {
  return base(Object.assign({
    url,
    method: 'get',
    params,
  }, options));
};

export default get;

