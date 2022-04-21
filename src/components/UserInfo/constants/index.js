//根据传入的类型,来判断需要什么样子的open-type
const typeConfig = {
  userInfo: 'getUserInfo',
  phone: 'getPhoneNumber'
};

/**
 * 描述获取用户个人信息的目的
 * @type {string}
 */
const needUserInfoDesc = '信息用于提供基础服务并完全保密';

export {
  typeConfig,
  needUserInfoDesc
};
