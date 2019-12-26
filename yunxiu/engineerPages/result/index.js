// engineerPages/result/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{
      repair: null,
      part: 123,
      train: null,
      upkeep: null,
      count: null,
      remark: "",
      result: "",
      cause: ""
    }
  },
  /***
   * 输入框数据改变触发函数
   */
  inputChange(e){
    let key = e.currentTarget.dataset.tkey;
    let value = e.detail.value;
    let info = this.data.info;
    if(e.type == "change"){
      key = e.detail.currentTarget.dataset.tkey;
      value = e.detail.detail.value;
    }
    info[key] = value;
    info.count = Number(info.repair) + Number(info.part) + Number(info.train) + Number(info.upkeep);
    this.setData({
      info
    })
    console.log(info,key,value,e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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