import querystring from 'querystring';
import {contentType} from '../../constants';

/**
 * 请求配置
 */
function requestConfig({
                         url = '',
                         method = 'get',
                         headers = {},
                         data = {},
                         success = () => {
                         },
                         fail = () => {
                         },
                         complete = () => {
                         }
                       }) {
  method = method.toUpperCase();
  headers = Object.assign({}, {
    'content-type': 'application/json'
  }, headers);
  data = headers['content-type'].includes(contentType) ? querystring.stringify(data) : data;
  return this.request({
    url,
    method,
    headers,
    data,
    success: ({data = {}, statusCode = ''}) => {
      success(data, statusCode);
    },
    fail: (res) => {
      fail(res);
    },
    complete: (res) => {
      complete(res);
    }
  });
}

export {
  requestConfig
};
