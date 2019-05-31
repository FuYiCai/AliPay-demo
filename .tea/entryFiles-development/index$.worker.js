if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../pages/components/chooseCity/chooseCity');
require('../../pages/index/index');
require('../../pages/mine/info/info');
require('../../pages/orders/addressInfo/addressInfo');
require('../../pages/orders/addressList/addressList');
require('../../pages/orders/confrimOrder/confrimOrder');
require('../../pages/orders/payment/payment');
require('../../pages/query/category/category');
require('../../pages/query/item/item');
require('../../pages/query/list/list');
require('../../pages/shoppingCart/cart/cart');
require('../../pages/template/itemList/itemList');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}