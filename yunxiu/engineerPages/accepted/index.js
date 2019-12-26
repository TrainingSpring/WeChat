// engineerPages/accepted/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'accepted',
    state:-1, //展示页面的代值  -1  全部  0 进行中  1 待付款  2 完成
    allOrder:[
      /**
       * status 
            0  进行中
            1  待付款
            2  完成
       */
      {
        number:165465,
        name:"客户名称",
        sendDate:"xxxxxxxxx",
        acceptDate:"2019-04-25 18:00:00",
        orderNum:"1/2",
        status:0
      },
      {
        number:165465,
        name:"客户名称",
        sendDate:"xxxxxxxxx",
        accepted:"2019-04-25 18:00:00",
        RMB:"125.00",
        status:1
      },
      {
        number:165465,
        name:"客户名称",
        sendDate:"xxxxxxxxx",
        comment:"2019-04-25 18:00:00",
        RMB:"256.00",
        starIndex:3,
        status:2
      },
      {
        number:165465,
        name:"客户名称",
        sendDate:"xxxxxxxxx",
        accepted:"2019-04-25 18:00:00",
        RMB:"125.00",
        status:1
      },
    ]
  },
/**
 * tab点击操作函数
 * @param {*} options 
 */
  changeHandle({detail}){
    let state = -1;  
    if(detail.key == "accepted"){
      state = -1;
    }else if(detail.key == "underway"){
      state = 0;
    }else if(detail.key == "waitPay"){
      state = 1;
    }else{
      state = 2;
    }
    this.setData({
      state,
      current:detail.key
    })
  },
  /**
   * 技术员页面
   * 前往订单详情
   */
  goDetail(e){
    let number = e.currentTarget.dataset.id; 
    wx.navigateTo({
      url: '/engineerPages/getOrder/index?number=' + number+"&accepted=1",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    try{
      this.changeHandle({detail:{key:options.params}})
    }catch(err){
        console.log(err)
    }
    
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