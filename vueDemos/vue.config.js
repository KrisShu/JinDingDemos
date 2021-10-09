
module.exports = {
  // 模板地址
  indexPath: "index.html",
  publicPath:'./',
  // 是否使用map
  productionSourceMap: false,
  // 是否使用hash值
  filenameHashing: true,
  devServer: {
    port: 8787,
    disableHostCheck: true,
    open:true
  }
};
