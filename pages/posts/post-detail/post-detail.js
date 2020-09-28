var postsData = require("../../../data/posts-data.js");
var app = getApp();

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

  onMusicTap: function (event) {

    var bgMusic = wx.getBackgroundAudioManager();
    bgMusic.src = postsData.postList[this.data.postId].music.url;
    bgMusic.title = postsData.postList[this.data.postId].music.title;

    var isPlay = this.data.isPlay;

    if (isPlay) {
      bgMusic.pause();
      this.setData({
        isPlay: !isPlay
      })
    } else {
      bgMusic.play();
      this.setData({
        isPlay: !isPlay
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var globalData = app.globalData;

    var that = this;
    wx.getBackgroundAudioManager().onPlay(function () {
      that.setData({
        isPlay: true
      })
    });

    wx.getBackgroundAudioManager().onPause(function () {
      that.setData({
        isPlay: false
      })
    });


    var globalData = app.globalData;

    var postId = option.id;
    var postData = postsData.postList[postId];

    this.setData({
      postData: postData,
      postId: postId
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

    wx.showToast({
      title: postCollected ? "成功收藏" : "取消收藏",
      duration: 800,
    })

  },

  onShareTap: function (event) {
    wx.showActionSheet({
      itemList: [
        '微信',
        'QQ',
        'blog'
      ],
      itemColor: "red",
      success: function (res) {
        // res.cancel是不是点击了取消
        // res.tapIndex点击的tap的序号
        wx.showModal({
          title: '你分享完成',
          content: '现在好了'
        })

      }
    })
  },
})