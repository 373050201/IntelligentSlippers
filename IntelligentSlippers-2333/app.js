//app.js
App({
  onShow:function(){
    this.globalData.onShowFlag = 1;
    this.globalData.onHideFlag = 0;
    var b=setInterval(function(){
      if (getApp().globalData.alarmSwitch == '（已设置）')
      {
        if (parseInt(getApp().globalData.alarmInputHour) == new Date().getHours() && parseInt(getApp().globalData.alarmInputMinute) == new Date().getMinutes())         
        {
          console.log("DINGDINGDINGDING.....");
          getApp().submitFuncInterface();
          var a = setInterval(function(){
            wx.request({
              method: 'POST',
              url: `http://api.heclouds.com/devices/${getApp().globalData.deviceId}/datapoints?datastream_id=clockState_`,
              header: {
                'api-key': getApp().globalData.apiKey
              },
              data: {
                "datastreams": [{
                  "id": "clockState_",
                  "datapoints": [{
                    "at": "",
                    "value": 0
                  }]
                }]
              },
            })
            clearInterval(a)
          },5000)
          getApp().globalData.alarmSwitch='（未设置）';
          getApp().globalData.alarmInputHour= '这里输入时';
          getApp().globalData.alarmInputMinute = '这里输入分';
        }
      }
      if (getApp().globalData.onShowFlag == 0)
      {
        clearInterval(b)
      }
      console.log(new Date().getHours(), "_", new Date().getMinutes(), "_", new Date().getSeconds());
    },1000)
  },

  onHide:function(){
    this.globalData.onShowFlag = 0;
    this.globalData.onHideFlag = 1;
    var b=setInterval(function () {
      if (getApp().globalData.alarmSwitch == '（已设置）') {
        if (parseInt(getApp().globalData.alarmInputHour) == new Date().getHours() && parseInt(getApp().globalData.alarmInputMinute) == new Date().getMinutes()) {
          console.log("DINGDINGDINGDING.....");
          getApp().submitFuncInterface();
          var a = setInterval(function () {
            wx.request({
              method: 'POST',
              url: `http://api.heclouds.com/devices/${getApp().globalData.deviceId}/datapoints?datastream_id=clockState_`,
              header: {
                'api-key': getApp().globalData.apiKey
              },
              data: {
                "datastreams": [{
                  "id": "clockState_",
                  "datapoints": [{
                    "at": "",
                    "value": 0
                  }]
                }]
              },
            })
            clearInterval(a)
          }, 5000)
          getApp().globalData.alarmSwitch = '（未设置）';
          getApp().globalData.alarmInputHour = '这里输入时';
          getApp().globalData.alarmInputMinute = '这里输入分';
        }
      }
      if (getApp().globalData.onHideFlag == 0) {
        clearInterval(b)
      }
      console.log(new Date().getSeconds());
    }, 1000)
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    apiKey:"5gZ=toJUnIQe2lgPZLt6bw0pIJw=",
    //SKL:"zFKy4H9t=YbrcbFxo73K1o7MsIM="
    //me:"5gZ=toJUnIQe2lgPZLt6bw0pIJw="
    deviceId:"577236712",
    ///SKL:"575270839"
    //me:"577236712"

    onShowFlag:0,
    onHideFlag:0,

    lightSwitchRecord:0,
    lightColorRecord: 0,
    lightAdjustRecord: 0,
    lightSwitch:'开',
    lightColor:'黄（暖）',
    lightAdjust: '自动',

    alarmSwitch:'（未设置）',
    alarmInputHour:'这里输入时',
    alarmInputMinute: '这里输入分',

    settingWeightSwitch:'（未设置）',
    settingWeight:'在这里输入整数体重(kg)',
    settingTestFlag:0,

    cYear: new Date().getFullYear(),
    cMonth: new Date().getMonth() + 1,
    cDate: new Date().getDate()
  },

  submitFuncInterface: function () {
    /*提交闹钟接口*/
    wx.request({
      method: 'POST',
      url: `http://api.heclouds.com/devices/${getApp().globalData.deviceId}/datapoints?datastream_id=clockState_`,
      header: {
        'api-key': getApp().globalData.apiKey
      },
      data: {
        "datastreams": [{
          "id": "clockState_",
          "datapoints": [{
            "at": "",
            "value": 1
          }]
        }]
      },
      success: function (res) {
        console.log(res)
      },
    })
  }
})