import querystring from 'querystring';
import {contentType} from '../../constants';

/**
 * 请求配置
 */
function requestConfig({
                         url = '',
                         method = 'get',
                         header = {},
                         data = {},
                         success = () => {
                         },
                         fail = () => {
                         },
                         complete = () => {
                         }
                       }) {
  method = method.toUpperCase();
  header = Object.assign({}, {
    'content-type': 'application/json'
  }, header);
  data = header['content-type'].includes(contentType) ? querystring.stringify(data) : data;
  return this.request({
    url,
    method,
    header,
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
