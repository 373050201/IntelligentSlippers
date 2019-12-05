Page({
  data: {
    color:'',
    mode:'',
    switch: ''
  },

  onShow:function(){
    this.setData
      ({
        switch: getApp().globalData.lightSwitch,
        color: getApp().globalData.lightColor,
        mode: getApp().globalData.lightAdjust
      })  
  },

  jumpHome: function () {
    wx.redirectTo
      ({
        url: '../home/home',
      })
  },

  changeSwitch:function(){
    getApp().globalData.lightSwitchRecord = !getApp().globalData.lightSwitchRecord;
    if (getApp().globalData.lightSwitchRecord==1)
    {
      getApp().globalData.lightSwitch='关';
    }
    else
    {
      getApp().globalData.lightSwitch='开';
    }
    this.setData
    ({
        switch: getApp().globalData.lightSwitch
    })
    this.changeSwitchInterface;
  },

  changeColor: function (){
    getApp().globalData.lightColorRecord = !getApp().globalData.lightColorRecord;
    if (getApp().globalData.lightColorRecord == 1) 
    {
      getApp().globalData.lightColor = '白（冷）';
    }
    else 
    {
      getApp().globalData.lightColor = '黄（暖）';
    }
    this.setData
      ({
        color: getApp().globalData.lightColor
      })
    this.changeColorInterface;
  },

  changeAdjust: function () {
    getApp().globalData.lightAdjustRecord = !getApp().globalData.lightAdjustRecord;
    if (getApp().globalData.lightAdjustRecord == 1) 
    {
      getApp().globalData.lightAdjust = '手动';
    }
    else {
      getApp().globalData.lightAdjust = '自动';
    }
    this.setData
      ({
        mode: getApp().globalData.lightAdjust
      })
    this.changeAdjustInterface;
  },

  /*接口*/
  changeSwitchInterface:function(){
    /*开关接口*/
  },

  changeColorInterface:function(){
    /*调色接口*/
  },
  
  changeAdjustInterface:function(){
    /*模式接口*/
  }
})