Page({
  jumpLight: function () {
    wx.redirectTo
      ({
        url: '../1_light/1_light',
      })
  },

  jumpAlarm: function () {
    wx.redirectTo
      ({
        url: '../2_alarm/2_alarm',
      })
  },

  jumpHealth: function () {
    wx.redirectTo
      ({
        url: '../3_health/3_health',
      })
  },

  jumpMore: function () {
    wx.redirectTo
      ({
        url: '../more/more',
      })
  }
})