// pages/machineDetails/inde.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"/images/machine_03.jpg",
    details:[
      {
        key:"机器名称",
        value:"This is machine name!"
      },
      {
        key:"机器编号",
        value:"MC0003"
      },
      {
        key:"机器品牌",
        value:"神州田岛"
      },
      {
        key:"机器种类",
        value:"平绣机"
      },
      {
        key:"机器针数",
        value:"12针"
      }

    ]
  },
  /**
   * 
   */
  downloadFile(e){
    let params = e.currentTarget.dataset.params;
    wx.navigateTo({
      url: '/pages/downloadFile/index?'+params,
    })
  }
  ,
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