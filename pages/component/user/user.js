// pages/component/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //微信用户头像
    thumb: '',
    //微信昵称
    nickname: '',
    orders: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    /**
     * 需要用户授权
     * 获取用户信息
     */
    wx.getUserInfo({
      success: function(res) {
        self.setData({
          thumb: res.userInfo.avatarUrl,
          nickname: res.userInfo.nickName
        })
      }
    });

    //模拟得到订单数据
    self.setData({
      orders: [{
        "number": "A4561245678641685",
        "thumb": "/image/c2.png",
        "name": "梨花带雨",
        "count": 3,
        "status": "待付款",
        "money": 5.00
      }, {
        "number": "A4561245678641685",
        "thumb": "/image/c2.png",
        "name": "梨花带雨",
        "count": 3,
        "status": "待付款",
        "money": 5.00
      }]
    })

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