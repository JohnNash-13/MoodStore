/**
 * RestFul风格参数的格式话
 * 后续可以添加相应的非法参数校验进行安全性的扩充
 * @param {Object} params
 */
function paramsFormat (params) {
  if (params instanceof Array) {
    return params.join('/')
  } else {
    return null
  }
}

export {
  paramsFormat
}
