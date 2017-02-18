// pages/textarea/textarea.js
Page({
  data:{
    reviewInputerShow: false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onReviewTrigger: function(e){
    this.setData({
      reviewInputerShow: true,
      focus: true
    })
  },
  onReviewInputBlur: function(e){
    this.setData({
      // reviewInputerShow: false,
    })
  },
  onReviewInputConfirm: function(e){
    this.setData({
      // reviewInputerShow: false,
    })
  },
  onReviewInputLineChange: function(e){
    this.setData({
      // reviewInputerShow: false,
    });
    console.log(e.detail);
  }
})