Page({
  data: {
    items: [
      { name: 'OPEN', value: '开' },
      { name: 'CLOSE', value: '关' },
    ],
    weight:"",
    switch:""
  },

  onShow:function(){
    this.setData
      ({
        switch: getApp().globalData.settingWeightSwitch,
        weight: getApp().globalData.settingWeight,
      })  
    if (getApp().globalData.settingTestFlag==0)
    {
      var checked = "items[1].checked"
      this.setData({
        [checked]:true
      })
    }
    else
    {
      var checked = "items[0].checked"
      this.setData({
        [checked]: true
      })
    }
  },

  deleteWeight:function(){
    getApp().globalData.settingWeightSwitch = '（未设置）';
    getApp().globalData.settingWeight ='在这里输入整数体重(kg)';
    this.setData
      ({
        switch: getApp().globalData.settingWeightSwitch,
        weight: getApp().globalData.settingWeight,
      }) 
    this.deleteWeightInterface(); 
  },

  jumpMore: function () {
    wx.redirectTo
      ({
        url: '../more',
      })
  },

  radioChange: function (e) {
    if (e.detail.value == 'OPEN') {
      getApp().globalData.settingTestFlag=1
      this.radioOpenInterface();
    }
    else {
      getApp().globalData.settingTestFlag=0
      this.radioCloseInterface();
    }
  },

  submitFunc:function(e){
    getApp().globalData.settingWeight=e.detail.value.input_weight;
    getApp().globalData.settingWeightSwitch='（已设置）';
    if (getApp().globalData.settingWeight=='')
    {
      console.log("error");
    }
    else
    {
      this.setData
      ({
          weight: getApp().globalData.settingWeight,
          switch: getApp().globalData.settingWeightSwitch,
      })
    }
    this.submitFuncInterface();
  },

  /**接口 */
  deleteWeightInterface:function(){
    /**取消体重接口 */
  },

  submitFuncInterface:function(){
    /**提交体重接口 */
  },

  radioOpenInterface:function(){
    /**测试（打开）接口 */
  },

  radioCloseInterface:function(){
    /**测试（关闭）接口 */
  }
})