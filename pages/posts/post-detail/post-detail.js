var postsData = require("../../../data/posts-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onCollectionTap:function(event){
    var key = wx.setStorageSync('key', "value");
    var val = wx.getStorageSync('key');
    console.log(val)
  },

  onShareTap:function(event){
    wx.removeStorage({
      key: 'key',
    })
    console.log(val)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var postId = option.id;
    var postData = postsData.postList[postId];
    console.log(postData)
    this.setData({
      postData:postData,
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})