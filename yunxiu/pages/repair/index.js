// pages/repair/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    userPhoneNumber:"",
    companyName:"",
    companyAddress:"",
    cause:"",
    imgPath:[],
    video:""
  },
  /**
   * 上传图片功能
   */
  uploadImg(){
    let self = this;
    wx.chooseImage({
      count:9,
      success: function(res) {
        self.setData({ imgPath: res.tempFilePaths });
      },
    })
  },
  /**
   * 上传视频功能
   */
  uploadVideo(){
    let self = this;
    wx.chooseVideo({
      success(res){
        self.setData({
          video:res.tempFilePath
        })
      }
    })
  },
  /**
   *input 内容绑定修改 
   */
  changeValue(e){
    let name = e.currentTarget.dataset.name;
    let value = e.detail.detail.value;
    this.data[name] = value;
    console.log(e.detail.detail.value);
    console.log(this.data[name]);
    this.setData({
      ...this.data
    })
  },
  /**
   * 确认提交
   */
  submit(){
    let username = this.data.username,
    userPhoneNumber = this.data.userPhoneNumber,
    companyName = this.data.companyName,
    companyAddress = this.data.companyAddress,
    cause = this.data.cause,
    imgPath = this.data.imgPath
    if(!username || !userPhoneNumber ||!companyName ||!companyAddress ||!cause ||!imgPath ){
      wx.showToast({
        title:"请检查信息是否填写完整",
        icon:"none"
      })
      return;
    }
    /**
     * 上传数据
     */
    // wx.request({
    //   url:"",
    //   data:{
    //     username:usernamne,
    //     userPhoneNumber,userPhoneNumber,
    //     companyName,companyName,
    //     companyAddress,companyAddress,
    //     cause,cause
    //   },
    //   success(res){

    //   }
    // })
    /**
     * 上传图片
     */
  //   wx.uploadFile({
  //     url:"",
  //     name:"repair",
  //     filePath:res.tempFilePaths[0],
  //     success:function(res){
  //       wx.showToast({
  //         title:"上传成功",
  //         icon:'success',
  //       })
  //       wx.navigateBack({
  //         delta:1
  //       })
  //     },
  //     fail:function(){
  //       wx.showToast({
  //         title:"上传失败",
  //         icon:'none',
  //       })
  //     }
  //  })
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