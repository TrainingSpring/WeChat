// pages/CountTime/index.js
let ITV;
let time = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"00:00:00", // 显示的时间
    state:0, // 开始状态
    amountTime:"", // 总时长
    remind:0, // 提醒次数
    bgColor:"rgb(92, 230, 220)",
    visible:false,
    pauseMusic:false,
    light:false,
    defaultLight:0,
    audio:[
      {
        isChecked:true,
        name:"Wonderful U",
        url:"https://music.163.com/song/media/outer/url?id=406475394.mp3"
      },
      {
        name:"The day you went away",
        url:"https://music.163.com/song/media/outer/url?id=3026369.mp3"
      },
      {
        name:"Because you",
        url:"https://music.163.com/song/media/outer/url?id=16232697.mp3"
      },
      {
        name:"Dream It Possible",
        url:"https://music.163.com/song/media/outer/url?id=38592976.mp3"
      },
      {
        name:"Cries in a Distance",
        url:"https://music.163.com/song/media/outer/url?id=108507.mp3"
      },
      {
        name:"Suger",
        url:"https://music.163.com/song/media/outer/url?id=29019227.mp3"
      },
      {
        name: "可惜没如果",
        url: "https://music.163.com/song/media/outer/url?id=29814898.mp3"
      },
      {
        name:"辞.九门回忆",
        url:"https://music.163.com/song/media/outer/url?id=557640761.mp3"
      },
      {
        name:"盗将行",
        url:"https://music.163.com/song/media/outer/url?id=574566207.mp3"
      },
      {
        name:"芒种",
        url:"https://music.163.com/song/media/outer/url?id=1369798757.mp3"
      },
      {
        name:"你就不要想起我",
        url:"https://music.163.com/song/media/outer/url?id=28018075.mp3"
      },
      {
        name: "那些你很冒险的梦",
        url: "https://music.163.com/song/media/outer/url?id=108138.mp3"
      },
      {
        name: "回忆总想哭",
        url: "https://music.163.com/song/media/outer/url?id=554191678.mp3"
      },
      {
        name: "丢了幸福的猪",
        url: "https://music.163.com/song/media/outer/url?id=103879.mp3"
      },
      {
        name: "忘不掉的伤",
        url: "https://music.163.com/song/media/outer/url?id=27904290.mp3"
      }
    ],
    isStop:true,
    settings:{
      music:undefined,
      type:1,
      interval:null,
      amount:null,
      isPauseCount:true
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  /**
   * 选择音乐触发函数
   * @param {*} e 
   */
  radioChangeMusic(e){
    let v = e.detail.value;
    let s = this.data.settings;
    s.music = this.data.audio[v];
    this.setData({
      settings:s
    })
  },
  /**
   *向下计时时的总数更改 
   */
  changeAmount(e){
    let v = e.detail.value;
    let s = this.data.settings;
    s.amount = parseFloat(v);
    this.setData({
      settings: s
    })
  },
  /**
   * 选择计时方式
   * @param {*} e 
   */
  radioChangeType(e) {
    let v = e.detail.value;
    let s = this.data.settings;
    s.type = parseInt(v);

    this.setData({
      settings:s
    })
  },
  /**
   * 更改计时提醒间隔时间
   * @param {*} e 
   */
  changeInterval(e){
    let v = e.detail.value;
    let s = this.data.settings;
    s.interval = parseFloat(v);
    this.setData({
      settings:s
    })
  },
  /**
   * 播放音乐
   */
  play(){

    let m = this.data.settings.music; 
    if (!m) m = this.data.audio[0];
    wx.playBackgroundAudio({
      dataUrl: m.url,
      title: m.name
    })
  },
  /**
   * 试听/暂停音乐
   * @param {*} e 
   */
    playMusic(e){
      if(this.data.state!==0)return;
      let s = this.data.isStop;
      this.setData({
        isStop:!s
      })
      if(s){
        this.play();
      }else{
        wx.pauseBackgroundAudio()
      }
      
    },
    /**
     * 提醒时暂停音乐
     */
    isPauseCount(e){
      let v = e.detail.value;
      let s = this.data.settings;
      s.isPauseCount = v;
      this.setData({
        settings:s
      })
    },
    /** 
     * 开始计时
     */
    countStart(){
      let s = this.data.settings;
      let state = this.data.state;
     
      
      // 状态: 0: 初始状态  1 暂停状态  2 执行状态
      if(state === 2){
        clearInterval(ITV);
        this.setData({
          state: 1
        })
      }else if(state === 1){
        if (s.type === 1) {
          ITV = setInterval(this. addTime, 10)
        } else {
          ITV = setInterval(this. subTime, 10)
        }
        this.setData({
          state:2
        })
      }else{
        // 初始状态  要初始化时间
        if (s.type === 1) {
          time = 0;
          ITV = setInterval(this. addTime, 10)
        } else {
          time = s.amount * 1000;
          if(time<=0)return;
          ITV = setInterval(this. subTime, 10)
        }
        this.setData({
          state: 2
        })
      }

    },
    setLight(e){
      let v = e.detail.value;
      this.setData({
        light:v
      })
      if(this.data.light){
        // 设置屏幕亮度
        wx.setScreenBrightness({
          value: 0
        })
      }else{
        console.log(this.data.defaultLight)
        wx.setScreenBrightness({
          value: this.data.defaultLight
        })
      }
      
    },
  /** 
   * @Author:Training
   * 将毫秒数格式化为时间 "时:分:秒"
   * 
   * */

  formatDate (num){
    let h = Math.floor(num / 1000 / 60 / 60);
    let min = Math.floor(num / 1000 / 60) - h * 60;
    let second = Math.floor(num / 1000) - min * 60 - h * 60 * 60;
    let ms = Math.floor(num - second * 1000 - min * 1000 * 60 - h * 1000 * 60 * 60);
    ms /= 10;
    return `${h < 10 ? '0' + h : h}:${min >= 10 ? min : '0' + min}:${second >= 10 ? second : '0' + second}:${ms >= 10 ? ms : '0' + ms}`
  },
  /** 加时间 */
  addTime () {
    let s = this.data.settings;
    time += 10;
    let visible = this.data.visible;
    let remind = this.data.remind;
    let amountTime = this.data.amountTime;
    let date = this.formatDate(time);
    // 是否到达间隔时间点
    if (s.interval && s.isPauseCount && s.interval * (remind + 1) * 1000 <= time) {
      clearInterval(ITV);
      visible = true;
      remind++;
      amountTime = date;
      this.play();
    }
    this.setData({
      time: date,
      visible,
      amountTime,
      remind
    })
  },
      /** 减时间 */
  subTime (){
    time -= 10;
    if (time <= 0) {
      time = 0;
      clearInterval(ITV);
      this.play();
      this.setData({
        state: 0,
        visible: true
      })
    }
    this.setData({
      time: this. formatDate(time)
    })
  },
    /**
     * 确认提醒 然后关闭模态框
     */
    closeModal(){
      let s = this.data.settings;
      if (s.type === 1) {
        ITV = setInterval(this.addTime, 10)
      } else {
        ITV = setInterval(this.subTime, 10)
      }
      this.setData({
        visible:false,
        pauseMusic:false
      })
      wx.stopBackgroundAudio()
    },
    /**暂停提醒时的音乐 */
  onPauseMusic(){
    let s = this.data.pauseMusic;
    this.setData({
      pauseMusic: !s
    })
    if (s) {
      this.play();
    } else {
      wx.pauseBackgroundAudio()
    }
  },
    /** 
     * 重置计时
     */
    countReload() {
      let s =  {
        music: this.data.settings.music,
        type:1,
        interval:null,
        amount:null,
        isPauseCount:true
      }
      clearInterval(ITV);
      wx.stopBackgroundAudio();
      time = 0;
      this.setData({
        settings:s,
        time: "00:00:00", // 显示的时间
        state: 0, // 开始状态
        amountTime: "", // 总时长
        remind: 0, // 提醒次数
        visible: false,
        pauseMusic: false,
        isStop: true,
      })
    },
    /** 
     * 取消
     */
    countCancel() {
      wx.navigateBack()
    },
  changeColorVal(e){
    let v = e.detail.value;
    this.data.bgColor = v;
  },
  changeBgColor(e){
    let bgColor = this.data.bgColor;
    this.setData({
      bgColor
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取屏幕亮度
    wx.getScreenBrightness({
      success: (val) => {
        console.log(val)
        this.data.defaultLight = val.value;
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})