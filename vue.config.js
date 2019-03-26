const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', resolve('src'))
    .set('components', resolve('src/components'))
    .set('page', resolve('src/page'))
    .set('base', resolve('src/base'))
    .set('common', resolve('src/common'))

    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 提供文件路径和资源
          resources: resolve('src/common/scss/index.scss'),
        })
        .end()
    })
  },
}
