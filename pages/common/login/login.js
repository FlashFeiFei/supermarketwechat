const EXCHANGE_SUPERMAKET_TOKE_URL = 'https://test.com/onLogin'
//登录到supermarket
function LoginSupermarket(){
  //检查session_key是否过期
  wx.checkSession({
    success() {
      // session_key 未过期，并且在本生命周期一直有效
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
     ExchangeSupermaketToken()
    }
  })
}

//通知后台，换取登录supermarket的token
function ExchangeSupermaketToken(){
  wx.login({
    success(res) {
      if (res.code) {
        // 发起网络请求
        wx.request({
          url: EXCHANGE_SUPERMAKET_TOKE_URL,
          data: {
            code: res.code
          },
          success:function(e){
            console.log(e)
            console.log("获取sessionkey调用接口成功")
            //保存token在全局变量里面
            getApp().globalData.supermarket_token = e.data.data
          },
          fail:function(e){
            //写死测试用
            getApp().globalData.supermarket_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6IiJ9.eyJBY2NvdW50VHlwZSI6MSwiT3BlbmlkIjoib3BlbmlkMTIzNDU2IiwiU2Vzc2lvbktleSI6InNlc3Npb25fa2V5MTIzNDU2IiwiU3VwZXJtYXJrZXRVc2VySWQiOjEsIlVuaW9uaWQiOiJ1bmlvbmlkMTIzNDU2IiwiaWF0IjoxNTQ1NzA4ODcxfQ.EGpzsJhjskfsGWEiUnAv9DQs47I2uBU1hmGfnDXYG30"
          }
        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}


module.exports.LoginSupermarket = LoginSupermarket