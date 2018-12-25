// 设置supermarketUserToken
const SUPERMARKET_USER_TOKEN = "supermarket_user_token"

function setSupermarketUserToken(token) {
  wx.setStorage({
    key: SUPERMARKET_USER_TOKEN,
    data: token,
  })
}


// 获取token
function getSupermarketUserToken(){
  var token = ""
  wx.getStorage({
    key: SUPERMARKET_USER_TOKEN,
    success: function(res) {
      console.log(res.data)
      token = res.data
    },
  })
  return token
}