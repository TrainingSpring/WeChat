let app = getApp();
let g_data = app.globalData;
Page({
  /**
   * 根据需求需要对用户组进行判断从而获取数据 
   * 因为用户和客户所查到的数据不同 
   * 所以以下的页面数据可以根据需要合并整理为一个
   */



  /**
   * 页面的初始数据
   */
  data: {
    userGroup:g_data.userGroup,
    paper:1,
    /**
     * 客户页面展示数据
     */
    commodity:[
      {
        img:"/images/commodity_03.png",
        title:"xxxxxxxxxxxxxxxxxxxxxxxxx",
        path:"/pages/articleDetails/index"
      },
      {
        img:"/images/commodity_06.png",
        title:"ccccccccccccccccccccccc",
        path:"/pages/videoDetails/index"
      },
      {
        img:"/images/commodity_08.png",
        title:"aaaaaaaaaaaaaaaaaaaaaaaaaa",
        path:"/pages/machineDetails/index"
      },
      {
        img:"/images/commodity_03.png",
        title:"xxxxxxxxxxxxxxxxxxxxxxxxx",
        path:"/pages/logs/logs"
      },
      {
        img:"/images/commodity_06.png",
        title:"ccccccccccccccccccccccc",
        path:"/pages/logs/logs"
      },
      {
        img:"/images/commodity_08.png",
        title:"aaaaaaaaaaaaaaaaaaaaaaaaaa",
        path:"/pages/logs/logs"
      }
    ],
    /**
     * 技术员页面展示数据
     */
    engineerList:[
      {
        number:6435165,                   //订单编号
        name:"深圳腾讯网络",              //客户名
        sendDate:"2019-04-24 14:30:25",   //故障报备
        orderNum:"1/2"                     //待接订单
      },
      {
        number:6435165,                   //订单编号
        name:"深圳腾讯网络",              //客户名
        sendDate:"2019-04-24 14:30:25",   //故障报备
        orderNum:"1/2"                     //待接订单
      },
      {
        number:6435165,                   //订单编号
        name:"深圳腾讯网络",              //客户名
        sendDate:"2019-04-24 14:30:25",   //故障报备
        orderNum:"1/2"                     //待接订单
      },
      {
        number:6435165,                   //订单编号
        name:"深圳腾讯网络",              //客户名
        sendDate:"2019-04-24 14:30:25",   //故障报备
        orderNum:"1/2"                     //待接订单
      }
    ]
  },
  /**
   * 技术员页面
   * 前往订单详情
   */
  goDetail(e){
    let number = e.currentTarget.dataset.id; 
    wx.navigateTo({
      url: '/engineerPages/getOrder/index?number=' + number,
    })
  },
  /**
   * @description 加载更多
   * @param {} 
   */
  loadMore(){
    //当滑动到底部时  触发事件   
    //处理对应函数
    let paper = this.data.paper;
    paper++;
    this.setData({
      paper:paper
    })
    console.log("触发加载更多...",this.data.paper);
  },
  /**
   * 跳转到详情页
   * @param {*} e event; 
   */
  toInfo(e){
    let path = e.currentTarget.dataset.path;
    console.log(path,"页面跳转")
    wx.navigateTo({
      url:path
    })
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
