
Page({
  data: {
  },
 searchItems(e){
   var itemName = e.detail.value;{
     if(itemName){
       my.navigateTo({
         url: `/pages/query/list/list/list?searchType=words&itemName=${itemName}`
       }
       );
     }
   }
 }
});
