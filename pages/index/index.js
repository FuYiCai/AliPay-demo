const app = getApp()

Page({
  data:{
    carousels : [],
    recList:[],
    newItemList:[]
  },
  onPullDownRefresh() {
    // 页面被下拉
    this.init()
  },
   onReady() {
     this.init()
   },
  init() {
    // 页面加载完成
    var me = this;
    /*轮播图 */
    my.request({
      url: app.serverUrl + '/index/carousels',
      method: 'POST',
      dataType: 'json',
      success: function(res) {
        var myData = res.data;
        if(myData.status == 200 ){
          var  carousels = myData.data;
          me.setData({
            carousels : carousels
          })
        }
      }
    });
    //推荐商品
    my.request({
      url: app.serverUrl + '/index/items/rec',
      method: 'POST',
      dataType: 'json',
      success: function(res) {
        console.log(res)
        var myData = res.data;
        if(myData.status == 200 ){
          var  recList = myData.data;
          me.setData({
            recList : recList
          })
        }
      }
    });
    //推荐新品
    my.request({
      url: app.serverUrl + '/index/items/new',
      method: 'POST',
      dataType: 'json',
      success: function(res) {
        console.log(res)
        var myData = res.data;
        if(myData.status == 200 ){
          var  newItemList = myData.data;
          me.setData({
            newItemList : newItemList
          })
        }
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
