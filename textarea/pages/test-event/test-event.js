// pages/test-event/test-event.js
let component = require("../../utils/component.js");

Page({
  data: {
    page: 'test-event'
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // component.component(this)


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onTap: function (e) {
    console.log(this)
  },
  run: function () {
    console.log('123')
  },

  onmessage: function (e) {
    console.log(e)
  }

})