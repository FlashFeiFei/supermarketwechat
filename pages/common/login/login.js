//登录token
const SUPERMARKET_LOGIN_URL = 'https://test.com/onLogin'

//小程序是否登录,暴露出去的函数
function WxMiniIsLogin() {
  // 判断是否需要重新登录
  is_login = LoginIsExpire()
  if (is_login) {
    //需要登录
    LoginSupermarket()
  }
}

//登录到supermarket
function LoginSupermarket() {
  wx.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wx.request({
          url: SUPERMARKET_LOGIN_URL,
          method: "POST",
          data: {
            code: res.code
          },
          success(res) {
            console.log(res.data)
            setSupermarketUserToken(res.data.data)
          },
          fail(res) {
            console.log("登录请求发生了错误！！！！！！")
            console.log(res)
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}


// 判断是否需要重新登录
function LoginIsExpire() {
  //是否过期
  var expire = true

  //获取token
  var token = getSupermarketUserToken()
  if (token == "") {
    //没有登录
    return expire
  }

  //检查小程序前端的session是否过期
  wx.checkSession({
    success() {
      // session_key 未过期，并且在本生命周期一直有效
      expire = false
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
    }
  })

  console.log(expire)
  return expire
}