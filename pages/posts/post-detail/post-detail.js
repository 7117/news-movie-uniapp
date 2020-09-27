var postsData = require("../../../data/posts-data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShareTap: function (event) {
    wx.removeStorage({
      key: 'key',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var postId = option.id;
    var postData = postsData.postList[postId];

    this.setData({
      postData: postData,
      postId:postId
    })

    // 进行设置收藏的设置
    var postsCollected = wx.getStorageSync('posts_Collected');

    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      });
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;

      wx.setStorageSync('posts_Collected', postsCollected);
    }
    console.log(postsCollected)

  },

  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_Collected');
    var postCollected = postsCollected[this.data.postId];
    postCollected = !postCollected;
    postsCollected[this.data.postId] = postCollected;
    wx.setStorageSync('posts_Collected', postsCollected);
    this.setData({
      collected: postCollected
    });

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