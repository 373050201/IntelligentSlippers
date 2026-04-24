Page({
  data: {
    arrayList:[
      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate-1),
        'trueWeight':'64.0',
        'dif':'',
        'difHead': '',
        'colorState':''
      },

      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate),
        'trueWeight':'67.3',
        'dif':'',
        'difHead':'',
        'colorState':''
      },

      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate+1),
        'trueWeight': '65.0',
        'dif': '',
        'difHead': '',
        'colorState': ''
      }
    ],
    settingWeight: '',
    settingWeightTail:'',
    difTail:''
  },

  onShow:function(){
    this.setData
      ({
        settingWeight: getApp().globalData.settingWeight
      })
    if (this.data.settingWeight =='在这里输入整数体重(kg)')
    {
      for (var i = 0; i < this.data.arrayList.length;i++)
      {
        var temp1 = 'arrayList['+i+'].dif';
        var temp2 = 'arrayList[' + i + '].colorState';
        this.setData
          ({
            [temp1]: 'NULL',
            [temp2]:'navyColor'
          })
      }
      this.setData
      ({
        settingWeight:'未设置',
      })
    }
    else
    {
      for (var i = 0; i < this.data.arrayList.length; i++) {
        var temp1 = 'arrayList[' + i + '].dif';
        var temp2 = 'arrayList[' + i + '].colorState';
        var temp3 = 'arrayList[' + i + '].difHead';
        this.setData
          ({
            [temp1]: (parseFloat(this.data.arrayList[i].trueWeight)-parseFloat(this.data.settingWeight)).toFixed(1)
          })
        if (parseFloat(this.data.arrayList[i].dif)>0)
        {
          this.setData
          ({
            [temp3]:'+',
            [temp2]:'redColor'
          })
        }
        else
        {
          this.setData
         ({
            [temp2]: 'greenColor'
         })
        }
      }
      this.setData
      ({
        difTail:'kg',
        settingWeightTail:'.0kg'
      })
    }
  },

  jumpHealth: function () {
    wx.redirectTo
      ({
        url: '../3_health',
      })
  },
})