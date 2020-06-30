import Taro from '@tarojs/taro';

/**
 * 上传文件的类型处理
 * @type {{}}
 */
const uploadTypeConfig = function () {
  const {type = ''} = this.props;
  return uploadType[type].call(this);
};

/**
 * 上传文件的类型
 * @type {{}}
 */
const uploadType = {
  image: function () {
    const {
      count = 9,
      sizeType = ['original'],
      sourceType = ['album'],
      callBack = () => {
      },
      done = () => {
      }
    } = this.props;
    Taro.chooseImage({
      count,
      sizeType,
      sourceType,
      success: ({tempFiles = []}) => {
        for (let {path = '', size = 0} of tempFiles) {
          callBack(path, size);
        }
      },
      fail: (res = {}) => {
        callBack(res);
      },
      complete: (res = {}) => {
        done(res);
      }
    });
  },
  video: function () {
    const {
      sourceType = ['album'],
      compressed = true,
      maxDuration = 60,
      camera = 'back',
      callBack = () => {
      },
      done = () => {
      }
    } = this.props;
    Taro.chooseVideo({
      sourceType,
      compressed,
      maxDuration,
      camera,
      success: ({tempFilePath = '', duration = 0, size = 0, height = 0, width = 0}) => {
        callBack(tempFilePath, size, duration, height, width);
      },
      fail: (res = {}) => {
        callBack(res);
      },
      complete: (res = {}) => {
        done(res);
      }
    });
  }
};

export {
  uploadTypeConfig
};
