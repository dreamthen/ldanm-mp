import Taro from '@tarojs/taro';
import querystring from 'querystring';

import {contentType} from '../../constants';
import * as constants from '../constants';
import exception from './exception';

/**
 * 用于普通请求(GET|POST|PUT|DELETE等)
 * @param url
 * @param method
 * @param header
 * @param data
 * @param success
 * @param fail
 * @param complete
 * @param Tools
 * @returns {*|never|Promise<Taro.request.Promised<any>>|Promise<TaroH5.request.Promised>}
 */
function requests({
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
                  }, Tools) {
  method = method.toUpperCase();
  header = Object.assign({}, {
    'content-type': 'application/json',
    'cookie': this.getStorageSync('petPlanet')
  }, header);
  data = header['content-type'].includes(contentType.xWWWUrlEncoded) ? querystring.stringify(data) : data;

  return this.request({
    url,
    method,
    header,
    data,
    success: ({data: responseData, statusCode, header: responseHeader}) => {
      if (exception.apply(Tools, [{
        errMsg: responseData['errmsg'],
        data: {responseData, statusCode, responseHeader},
        request: Tools.request.bind(Tools),
        params: {url, method, header, data, success, fail, complete}
      }])) {
        success(responseData, responseHeader);
      }
    },
    fail(res) {
      fail(res);
    },
    complete(res) {
      complete(res);
    }
  });
}

/**
 * 用于上传文件
 * @param url
 * @param filePath
 * @param name
 * @param headers
 * @param formData
 * @param success
 * @param fail
 * @param complete
 * @param size
 * @returns {*|TaroH5.uploadFile.UploadTask|never}
 */
function uploadFile({
                      url = '',
                      filePath = '',
                      name = '',
                      size = 0,
                      header = {},
                      formData = '',
                      success = () => {
                      },
                      fail = () => {
                      },
                      complete = () => {
                      }
                    }) {
  //图片的限制大小
  if (size > constants.maxFileSize) {
    Taro.atMessage(constants.message.maxFileSize);
    return null;
  }
  header = Object.assign({}, {
    'content-type': 'application/json',
    'cookie': this.getStorageSync('petPlanet')
  }, header);
  return this.uploadFile({
    url,
    filePath,
    name,
    header,
    formData,
    success({data, statusCode}) {
      const _data = JSON.parse(data);
      if (exception({
        errMsg: _data['errmsg'],
        data: {data, statusCode},
      })) {
        success(data, statusCode);
      }
    },
    fail(res) {
      fail(res);
    },
    complete(res) {
      complete(res);
    }
  });
}

export {
  requests,
  uploadFile
};
