// pages/component/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [],
    detail: [],
    //当前的tab的key
    curIndex: 0,
    //当前的id，服务器传过来的
    toView: 'guowei',
    isScroll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 只有一次
   */
  onReady: function() {
    var self = this;
    //这个发送的请求需要配置请求的域名，所以发送不出去
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });

    // 设置左侧tab的数据
    self.setData({
      category: [{
        name: '果味',
        id: 'guowei'
      },
      {
        name: '蔬菜',
        id: 'shucai'
      },
      {
        name: '炒货',
        id: 'chaohuo'
      },
      {
        name: '点心',
        id: 'dianxin'
      },
      {
        name: '粗茶',
        id: 'cucha'
      },
      {
        name: '淡饭',
        id: 'danfan'
      }
      ]
    })



    // 设置右侧的数据
    self.setData({
      detail: [{
          "id": "guowei",
          "banner": "/image/c1.png",
          "cate": "果味",
          "detail": [{
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "shucai",
          "banner": "/image/c1.png",
          "cate": "蔬菜",
          "detail": [{
              "thumb": "/image/s4.png",
              "name": "瓜子 3个"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        },
        {
          "id": "chaohuo",
          "banner": "/image/c1.png",
          "cate": "炒货",
          "detail": [{
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "dianxin",
          "banner": "/image/c1.png",
          "cate": "点心",
          "detail": [{
              "thumb": "/image/s4.png",
              "name": "瓜子 3个"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        },
        {
          "id": "cucha",
          "banner": "/image/c1.png",
          "cate": "粗茶",
          "detail": [{
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c4.png",
              "name": "奇异果 2个"
            },
            {
              "thumb": "/image/c3.png",
              "name": "红枣 500g"
            },
            {
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            },
            {
              "thumb": "/image/c2.png",
              "name": "梨花带雨 3个"
            }
          ]
        },
        {
          "id": "danfan",
          "banner": "/image/c1.png",
          "cate": "淡饭",
          "detail": [{
              "thumb": "/image/s4.png",
              "name": "瓜子 3个"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s6.png",
              "name": "小米"
            },
            {
              "thumb": "/image/s5.png",
              "name": "芹菜 500g"
            },
            {
              "thumb": "/image/s4.png",
              "name": "瓜子 4个"
            }
          ]
        }
      ]
    });
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

  },

  /**
   * 左侧table点击事件 
   */
  switchTab: function(e) {
    const self = this;

    this.setData({
      //右侧可以滚动
      isScroll: true
    })

    console.log(e.target.dataset.id);
    console.log(e.target.dataset.index);

    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)


    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)


  }
})