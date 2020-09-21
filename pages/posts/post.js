// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "11 22 22",
    title: "我的个人"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = {
      date: "Sep 18 2016",
      title: "正是虾肥蟹壮时",
      imgSrc: "/images/post/crab.png",
      avatar: "/images/avatar/1.png",
      content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
      reading: "112",
      collection: "96",
      headImgSrc: "/images/post/crab.png",
      author: "林白衣",
      dateTime: "24小时前",
      detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船",
      postId: 0,
    }
    this.setData(post_content);
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