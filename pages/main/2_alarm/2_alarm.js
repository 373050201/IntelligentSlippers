Page({
  data: {
    width: 0,
    height: 0,
    switch: '',
    inputHour:'',
    inputMinute:''
  },

  onShow:function(){
    this.setData
      ({
        switch: getApp().globalData.alarmSwitch,
        inputHour: getApp().globalData.alarmInputHour,
        inputMinute: getApp().globalData.alarmInputMinute,
      })  
  },

  jumpHome: function () {
    wx.redirectTo
      ({
        url: '../home/home',
      })
  },

  submitFunc:function(e){
    getApp().globalData.alarmInputHour = e.detail.value.input_hour;
    getApp().globalData.alarmInputMinute = e.detail.value.input_minute;
    if (getApp().globalData.alarmInputHour == '' || getApp().globalData.alarmInputMinute =='')
    {
      console.log("error")
    }
    else
    {
      getApp().globalData.alarmSwitch = '（已设置）';
      this.setData
        ({
          switch: getApp().globalData.alarmSwitch,
          inputHour: getApp().globalData.alarmInputHour,
          inputMinute: getApp().globalData.alarmInputMinute,
        })
      wx.showToast({
        title: '设置成功',
        icon: 'success',
        duration: 2000
      })
    }
  },

  deleteAlarm:function(){
    getApp().globalData.alarmSwitch='（未设置）';
    getApp().globalData.alarmInputHour= '这里输入时';
    getApp().globalData.alarmInputMinute= '这里输入分';
    this.setData
      ({
        switch: getApp().globalData.alarmSwitch,
        inputHour: getApp().globalData.alarmInputHour,
        inputMinute: getApp().globalData.alarmInputMinute,
      })
    this.deleteAlarmInterface();
  },

  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.width = res.windowWidth
        that.height = res.windowHeight
      }
    })
  },

  onReady: function () {
    this.drawClock();
    this.interval = setInterval(this.drawClock, 40);
  },

  drawClock: function () {
    const ctx = wx.createCanvasContext('clock');
    var height = this.height;
    var width = this.width;
    var R = width / 2 - 60;
    ctx.translate(width / 2, height / 2);
    function drawBackground() {
      ctx.setLineWidth(8);
      ctx.beginPath();
      ctx.arc(0, 0, width / 2 - 30, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.stroke();
    };

    function drawHoursNum() {
      ctx.setFontSize(20);
      var hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
      hours.forEach(function (hour, i) {
        var rad = (2 * Math.PI / 12) * i;
        var x = R * Math.cos(rad);
        var y = R * Math.sin(rad);
        if (hour == 12) {
          ctx.fillText(hour, x - 11, y + 6);
        } else if (hour == 6) {
          ctx.fillText(hour, x - 5, y + 6);
        } else {
          ctx.fillText(hour, x - 6, y + 6);
        }
      })
    };

    function drawdots() {
      for (let i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = (R + 15) * Math.cos(rad);
        var y = (R + 15) * Math.sin(rad);
        ctx.beginPath();
        if (i % 5 == 0) {
          ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
        } else {
          ctx.arc(x, y, 1, 0, 2 * Math.PI, false);
        }
        ctx.setFillStyle('black');
        ctx.fill();
      }
      ctx.closePath();
    }

    function drawHour(hour, minute) {
      ctx.save();
      ctx.beginPath();
      var rad = 2 * Math.PI / 12 * hour;
      var mrad = 2 * Math.PI / 12 / 60 * minute;
      ctx.rotate(rad + mrad);
      ctx.setLineWidth(8);
      ctx.setLineCap('round');
      ctx.moveTo(0, 8);
      ctx.lineTo(0, -R / 2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    function drawMinute(minute, second) {
      ctx.save();
      ctx.beginPath();
      var rad = 2 * Math.PI / 60 * minute;
      var mrad = 2 * Math.PI / 60 / 60 * second;
      ctx.rotate(rad + mrad);
      ctx.setLineWidth(6);
      ctx.setLineCap('round');
      ctx.moveTo(0, 10);
      ctx.lineTo(0, -3 * R / 4);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }

    function drawSecond(second, msecond) {
      ctx.save();
      ctx.beginPath();
      var rad = 2 * Math.PI / 60 * second;
      var mrad = 2 * Math.PI / 60 / 1000 * msecond;
      ctx.rotate(rad + mrad);
      ctx.setLineWidth(4);
      ctx.setStrokeStyle('red');
      ctx.setLineCap('round');
      ctx.moveTo(0, 12);
      ctx.lineTo(0, -R);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    function drawDot() {
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, 2 * Math.PI, false);
      ctx.setFillStyle('lightgrey');
      ctx.fill();
      ctx.closePath();
    }

    function Clock() {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes()
      var second = now.getSeconds();
      var msecond = now.getMilliseconds();
      drawBackground();
      drawHoursNum();
      drawdots();
      drawHour(hour, minute);
      drawMinute(minute, second);
      drawSecond(second, msecond);
      drawDot();
      ctx.draw();
    }
    Clock();
  },


  /*接口*/
  deleteAlarmInterface:function(){
    /*取消闹钟接口*/
  }
})