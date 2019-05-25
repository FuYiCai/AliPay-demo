const app = getApp()

Page({
  data:{
    carousels : [],
  },
  onReady() {
    // 页面加载完成
    var me = this;
    /*轮播图 */
    my.request({
      url: app.serverUrl + '/index/carousels',
      method: 'POST',
      // data: {
      //   from: '支付宝',
      //   production: 'AlipayJSAPI',
      // },
      dataType: 'json',
      success: function(res) {
        var myData = res.data;
        if(myData.status == 200 ){
          var  carousels = myData.data;
          me.setData({
            carousels : carousels
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
