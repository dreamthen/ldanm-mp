/**
 * px转换
 * @param size
 * @returns {string}
 */
function pxTransform(size) {
  if (!size)
    return '';
  const designWidth = 750;
  const deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  };
  return `${size / deviceRatio[designWidth]}rpx`;
}

export {
  pxTransform
};
