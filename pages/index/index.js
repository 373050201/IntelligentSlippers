Page({
  jumpMain:function()
  {
    wx.redirectTo
    ({
      url: '../main/home/home',
    })
  },

  jumpAbout:function () 
  {
    wx.redirectTo
      ({
        url: '../about/about',
      })
  }
})