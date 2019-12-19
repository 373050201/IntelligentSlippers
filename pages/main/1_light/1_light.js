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
      this.changeSwitchCloseInterface();
    }
    else
    {
      getApp().globalData.lightSwitch='开';
      this.changeSwitchOpenInterface();
    }
    this.setData
    ({
        switch: getApp().globalData.lightSwitch
    })
  },

  changeColor: function (){
    getApp().globalData.lightColorRecord = !getApp().globalData.lightColorRecord;
    if (getApp().globalData.lightColorRecord == 1) 
    {
      getApp().globalData.lightColor = '白（冷）';
      this.changeColorWhiteInterface();
    }
    else 
    {
      getApp().globalData.lightColor = '黄（暖）';
      this.changeColorYellowInterface();
    }
    this.setData
      ({
        color: getApp().globalData.lightColor
      })
    ;
  },

  changeAdjust: function () {
    getApp().globalData.lightAdjustRecord = !getApp().globalData.lightAdjustRecord;
    if (getApp().globalData.lightAdjustRecord == 1) 
    {
      getApp().globalData.lightAdjust = '手动';
      this.changeAdjustHandInterface();
    }
    else 
    {
      getApp().globalData.lightAdjust = '自动';
      this.changeAdjustAutoInterface();
    }
    this.setData
      ({
        mode: getApp().globalData.lightAdjust
      })
  },

  /*接口*/
  changeSwitchOpenInterface:function(){
    /*开关（开）接口*/
  },

  changeSwitchCloseInterface: function () {
    /*开关（关）接口*/
  },

  changeColorWhiteInterface:function(){
    /*调色（白）接口*/
  },
  
  changeColorYellowInterface: function () {
    /*调色（黄）接口*/
  },

  changeAdjustAutoInterface:function(){
    /*模式（自动）接口*/
  },

  changeAdjustHandInterface: function () {
    /*模式（手动）接口*/
  }
})