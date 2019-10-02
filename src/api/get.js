import base from './base';

const get = function (url, params, options) {
  return base(Object.assign({
    url,
    methods: 'get',
    params,
  }, options));
};

export default get;

