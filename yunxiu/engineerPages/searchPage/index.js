// engineerPages/searchPage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state:-1,
    searchData:[]
  },
  /**
   * 点击键盘上的回车触发搜索功能
   * @param {*} options 
   */
  search({detail}){
    let val = detail.value;

    //  此处调用搜索接口  搜索就是val
    this.setData({
      searchData:[
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
    })
    console.log(this.data.searchData);
    
    
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