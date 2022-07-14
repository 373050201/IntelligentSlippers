Page({
  data: {
    arrayList: [
      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate - 1),
        'bedTimeHour': '23',
        'bedTimeMinute': '10',
        'difHour':'',
        'difMinute':'',
        'colorState': '',
        'wakeTimeHour': '10',
        'wakeTimeMinute': '50',
        'colon1': '',
        'colon2': '',
        'h': '',
        'min': ''
      },

      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate),
        'bedTimeHour': '1',
        'bedTimeMinute': '10',
        'difHour': '',
        'difMinute': '',
        'colorState': '',
        'wakeTimeHour': '8',
        'wakeTimeMinute': '20',
        'colon1': '',
        'colon2': '',
        'h': '',
        'min': ''
      },

      {
        'date': getApp().globalData.cYear + '.' + getApp().globalData.cMonth + '.' + (getApp().globalData.cDate+1),
        'bedTimeHour': '',
        'bedTimeMinute': '',
        'difHour': '',
        'difMinute': '',
        'colorState': '',
        'wakeTimeHour': '',
        'wakeTimeMinute': '',
        'colon1': '',
        'colon2': '',
        'h': '',
        'min': ''
      }
    ],
    
  },

  onShow:function(){
    this.setData({
      wakeTimeHour: getApp().globalData.alarmInputHour,
      wakeTimeMinute: getApp().globalData.alarmInputMinute
    })
    for (var i = 0; i < this.data.arrayList.length; i++) 
    {
      if (this.data.arrayList[i].bedTimeHour == '' || this.data.arrayList[i].bedTimeMinute== '') 
      {
        var temp = 'arrayList[' + i + '].colon1';
        this.setData
          ({
            [temp]: 'NULL',
          })
      }
      else
      {
        var temp1 = 'arrayList[' + i + '].bedTimeHour';
        var temp2 = 'arrayList[' + i + '].bedTimeMinute';
        var temp3 = 'arrayList[' + i + '].colon1';
        this.setData
          ({
            [temp1]: this.data.arrayList[i].bedTimeHour,
            [temp3]: ':',
            [temp2]: this.data.arrayList[i].bedTimeMinute,
          })
      }

      if (this.data.arrayList[i].wakeTimeHour == '' || this.data.arrayList[i].wakeTimeMinute == '')
      {
        var temp = 'arrayList[' + i + '].colon2';
        this.setData
          ({
            [temp]: 'NULL',
          })
      }
      else 
      {
        var temp1 = 'arrayList[' + i + '].wakeTimeHour';
        var temp2 = 'arrayList[' + i + '].wakeTimeMinute';
        var temp3 = 'arrayList[' + i + '].colon2';
        this.setData
          ({
            [temp1]: this.data.arrayList[i].wakeTimeHour,
            [temp3]: ':',
            [temp2]: this.data.arrayList[i].wakeTimeMinute,
          })
      }

      if (this.data.arrayList[i].colon1 == 'NULL' || this.data.arrayList[i].colon2 == 'NULL') 
      {
        var temp = 'arrayList[' + i + '].h';
        this.setData
          ({
            [temp]: 'NULL',
          })
      }
      else
      {
        var temp1 = 'arrayList[' + i + '].h';
        var temp2 = 'arrayList[' + i + '].min';
        var temp3 = 'arrayList[' + i + '].difHour';
        var temp4 = 'arrayList[' + i + '].difMinute';
        this.setData
          ({
            [temp1]: 'h',
            [temp2]: 'min',
            [temp3]: 23 - parseInt(this.data.arrayList[i].bedTimeHour) + parseInt(this.data.arrayList[i].wakeTimeHour),
            [temp4]: 60 - parseInt(this.data.arrayList[i].bedTimeMinute) + parseInt(this.data.arrayList[i].wakeTimeMinute),
          })
        if (parseInt(this.data.arrayList[i].difMinute)>=60)
        {
          var temp5 = 'arrayList[' + i + '].difMinute';
          var temp6 = 'arrayList[' + i + '].difHour';
          this.setData
            ({
              [temp5]:parseInt(this.data.arrayList[i].difMinute)-60,
              [temp6]: parseInt(this.data.arrayList[i].difHour)+1
            })
        }
        if (parseInt(this.data.arrayList[i].difHour) >= 24) {
          var temp5 = 'arrayList[' + i + '].difHour';
          this.setData
            ({
              [temp5]: parseInt(this.data.arrayList[i].difHour) - 24,
            })
        }

        if(this.data.arrayList[i].difHour>=8)
        {
          var temp = 'arrayList[' + i + '].colorState';
          this.setData
            ({
              [temp]: 'greenColor',
            })
        }
        else
        {
          var temp = 'arrayList[' + i + '].colorState';
          this.setData
            ({
              [temp]: 'redColor',
            })
        }
      }
    }
  },

  jumpHealth: function () {
    wx.redirectTo
      ({
        url: '../3_health',
      })
  },
})