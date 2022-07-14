Page({
  jumpWeight: function () {
    wx.redirectTo
      ({
        url: 'weight/weight',
      })
  },

  jumpSleep: function () {
    wx.redirectTo
      ({
        url: 'sleep/sleep',
      })
  },

  jumpHome: function () {
    wx.redirectTo
      ({
        url: '../home/home',
      })
  },
})