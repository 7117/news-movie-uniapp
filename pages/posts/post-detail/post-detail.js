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

  onMusicTap: function (event) {

    var bgMusic = wx.getBackgroundAudioManager();
    bgMusic.src = 'http://m10.music.126.net/20200927230909/a5e2c71c2645e7f9d53d0a24fa345298/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3064950665/c551/074f/e6f3/517194e3c9c00d8d8cc04097ebae26f4.m4a';
    bgMusic.title = "title";

    var isPlay = this.data.isPlay;

    console.log(isPlay);

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