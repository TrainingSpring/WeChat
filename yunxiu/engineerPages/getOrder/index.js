// engineerPages/getOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:"order",
    mask:1,
    maskIndex:1,
    /**
     * 订单信息
     */
    orderInfo:{
      number:"21564165",                  //订单编号
      name:"惠州xx集团",                  //客户名称
      connect:"李女士",                  //联系人
      phoneNumber:"15211112222",        //联系方式
      address:"惠州仲恺高新区",          //联系地址
      sendDate:"2019-04-24 17:33:05",  //报障时间
      machineNum:"FASF4151AS",        //设备编号
      cause:"断线",                   //故障原因
      accept:false                   //是否已接单
    },
    recordList:[
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      },
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      },
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      },
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      },
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      },
      {
        number:3545,                             //订单编号
        sendDate:"2019-04-25 18:00:05",         //报障时间
        errorMsg:"000000000000001111111111111",//故障说明
        solv:"xxxxxxxxxxxxxxxxx",             //故障处理方法
        result:"xxxxxxxxxxxxxx"              //处理结果
      }
    ],
    machine:{
      current:"basic",
      name:"机器名称"
    }
  },
  /** 
   * 
   */
  showMask({currentTarget}){
    let index = currentTarget.dataset.index;
  
    console.log(index);
    this.setData({
      mask:!this.data.mask,
      maskIndex:index
    })
  },
  /**
   * 顶部taps点击处理函数
   * @param {*}  
   */
  handleChange({detail}){
    this.setData({
      current: detail.key
    });
  },
  /**
   * 机器信息
   * tab点击处理函数
   * @param {*}  
   */
  changeMachine({detail}){
    let machine = this.data.machine;
    machine.current = detail.key;
    this.setData({
      machine
    })
  },
  /**
   * 接单     处理
   *    通用函数
   */
  orderHandle(){
    let orderInfo = this.data.orderInfo;
    //如果已经接单
    if(this.data.orderInfo.accept){
      //handle
    }else{
      //没有接单  点击执行接单函数
      orderInfo.accept = true;
      this.setData({
        orderInfo:orderInfo
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let orderInfo = this.data.orderInfo;
    orderInfo.accept = options.accepted==1?true:false;
    this.setData({
      orderInfo
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