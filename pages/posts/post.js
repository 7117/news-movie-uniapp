// 必须使用相对路径
var postsData = require('../../data/posts-data.js');

Page({

  /**
   * 页面的初始数据
   */

  // 小程序总会读取data对象来做数据绑定，这个动作就是动作a（数据绑定）
  // 动作a是在onload之后发生的  所以data上已经有数据了  不需要setdata
  // 动作a是在onload之前发生的  onload就需要更新了
  // 都用setdata就行  this.data.aa=sdd.aa(这个是更新)
  data: {},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      posts_key: postsData.postList,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})