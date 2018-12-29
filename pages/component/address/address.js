// pages/component/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: null,
    refuse: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  // 收获地址
  chooseAddress() {
    var self = this;
    // 查看用户是否授权地址
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success: (res) => {
              console.log(res)
              self.setData({
                addressInfo: res,
                refuse: false
              })
            },
            fail: function(err) {
              self.setData({
                refuse: true
              })
            }
          })
        } else {
          console.log(self.data.refuse)
          if (self.data.refuse) {
            wx.openSetting({
              success: (res) => {
                console.log(res)
              }
            })
          } else {
            wx.chooseAddress({
              success: (res) => {
                console.log(res)
                self.setData({
                  addressInfo: res,
                  refuse: false
                })
              },
              fail: function(err) {
                self.setData({
                  refuse: true
                })
              }
            })
          }
        }
      }
    })
  }
})