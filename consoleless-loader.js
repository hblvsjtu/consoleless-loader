const loaderUtils = require("loader-utils");

module.exports = function loader(content) {
  // 使用 loaderUtils 来获取 loader 的配置项
  // this 是构建运行时的一些上下文信息
  const options = loaderUtils.getOptions(this);
  console.log(options);
  return content.replace(/console\..+\(.+\);/, "");
};
