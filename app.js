//app.js
// supermaket登录
const SUPERMAKET_LOGIN = require('./pages/common/login/login.js')
App({
  onLaunch: function () {

    //让supermaket后台登录
    SUPERMAKET_LOGIN.LoginSupermarket()
  },
  globalData: {
    userInfo: null,
    //登录到supermarket的token
    supermarket_token:""
  }
})