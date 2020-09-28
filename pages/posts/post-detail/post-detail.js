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

    if (app.globalData.g_isPlayingMusic) {
      bgMusic.pause();
      app.globalData.g_isPlayingMusic = !app.globalData.g_isPlayingMusic;
    } else {
      bgMusic.play();
      app.globalData.g_isPlayingMusic = !app.globalData.g_isPlayingMusic;
    }

    this.setData({
      isPlay: app.globalData.g_isPlayingMusic
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {

    var that = this;
    wx.getBackgroundAudioManager().onPlay(function () {
      app.globalData.g_isPlayingMusic = true;

    });

    wx.getBackgroundAudioManager().onPause(function () {
      app.globalData.g_isPlayingMusic = false;
    });
    that.setData({
      isPlay: app.globalData.g_isPlayingMusic
    })


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