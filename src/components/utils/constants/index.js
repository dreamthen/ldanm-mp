const modal = {
  title: '铲屎官 - 更新提示',
  content: '铲屎官新的版本已经下载好,是否重启应用?'
};

// 图片的限制大小
const maxFileSize = 1024 * 1024;

//提示语
const message = {
  maxFileSize: {
    type: 'warning',
    message: '上传的图片过大,不可超过1M!'
  }
};

export {
  modal,
  maxFileSize,
  message
};
