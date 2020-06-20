import Taro from "@tarojs/taro";

function initTestEnv(){
  if (process.env.NODE_ENV === 'test') {
    Taro.initPxTransform({
      designWidth: 750,
      deviceRatio: {
        '640': 2.34 / 2,
        '750': 1,
        '828': 1.81 / 2
      }
    })
  }
}

export {
  initTestEnv
};
