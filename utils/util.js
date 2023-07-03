const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function request(url, data = {}, method = 'GET') {
  return new Promise(function(resolve, reject) {
    wx.request({
      url,
      data,
      method,
      header: {
        'Content-Type': 'application/json',
        // 配置token
        'x-Nideshop-token': wx.getStorageSync('token')
      },
      success(res) {
        if(res.statusCode === 200) {
          if(res.data.errno === 401) {
            let code = null;
            login().then(res => {
              code = res.code
              return getUserInfo()
            }).then(userInfo => {
              // 登录远程服务器
            })
          } else {
            resolve(res.data)
          }
        } else {
          reject(res)
        }
      } 
    })
  })
}

// 微信登录
function login() {
  return new Promise(function(resolve, reject) {
    wx.login({
      success(res) {
        // code 用户登录凭证，使用code 换取 openid、unionid、session_key 等信息
        if(res.code) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

// 获取用户信息
function getUserInfo() {
  return new Promise(function(resolve, reject) {
    wx.getUserInfo({
      success(res) {
        if(res.detail.errMsg == "getUserInfo:ok") {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  formatTime,
  request,
  login,
  getUserInfo
}
