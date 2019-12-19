Page({
  jumpHome: function () {
    wx.redirectTo
      ({
        url: '../home/home',
      })
  },

  jumpAbout: function () {
    wx.redirectTo
      ({
        url: '../../about/about',
      })
  },

  jumpSetting: function () {
    wx.redirectTo
      ({
        url: 'setting/setting',
      })
  },

  jumpHelp: function () {
    wx.redirectTo
      ({
        url: 'help/help',
      })
  },
})