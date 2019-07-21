// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var post_data = [
      {
        date: "eee",
        title: "aaa",
        post_img: "/images/post/crab.png",
        content: "我是谁我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊我是谁啊啊",
        view_num: "11",
        collect_num: "97",
        author_img: "/images/avatar/1.png",
      },
      {
        date: "444",
        title: "555",
        post_img: "/images/post/crab.png",
        content: "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        view_num: "11",
        collect_num: "97",
        author_img: "/images/avatar/1.png",
      }
    ]

    this.setData({
      posts_key: post_data,
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