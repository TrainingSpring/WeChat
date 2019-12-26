// pages/myOrder/index.js
Page({

  /**
   * @desc 页面的初始数据
   * @params {
   *  current: 当前选中的标签  与tab组件key属性一致
   *  allOrder:{ 所有订单
   *    number:订单编号
   *    status:订单状态   -1 == 交易失败  0 == 交易进行中  1 == 交易成功   2 == 等待付款
   *    sendDate:报障时间
   *    machineNum:设备编号
   *    errorDesc:故障描述
   *    result:处理结果     
   *    payNum:付款金额
   *  }     
   * 
   * }
   *   
   */
  data: {
    current:"all",
    allOrder:[
      {
        number:461654315,                      
        status:"0",                            
        sendDate:"2019-04-25 09:08:52",
        machineNum:"1646254ESC 456",
        errorDesc:"设备问题"
      },
      {
        number:461654312,
        status:"1",
        sendDate:"2019-04-25 09:08:52",
        machineNum:"1646254ESC 456",
        errorDesc:"设备问题1",
        result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
        payNum:"178.00",
        evaluate:0
      },
      {
        number:461654312,
        status:"2",
        sendDate:"2019-04-25 09:08:52",
        machineNum:"1646254ESC 456",
        errorDesc:"设备问题1",
        result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
        payNum:"178.00",
        evaluate:0
      },
      {
        number:461654312,
        status:"1",
        sendDate:"2019-04-25 09:08:52",
        machineNum:"1646254ESC 456",
        errorDesc:"设备问题1",
        result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
        payNum:"178.00",
        evaluate:1
      },
      {
        number:461654312,
        status:"1",
        sendDate:"2019-04-25 09:08:52",
        machineNum:"1646254ESC 456",
        errorDesc:"设备问题1",
        result:"全都怪我,不该沉默时沉默,该勇敢时软弱, 如果不是我,误会自己洒脱,让我们难过,可当初的你,和现在的我,假如重来过",
        payNum:"178.00",
        evaluate:0
      },
    ]
  },
  /**
   * 操作tab标签更改函数
   * @param {*} e  
   */
  handleChange({detail}){
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      current:options.params
    })
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