App({
  onLaunch: function () {
    wx.request({ 
      url: 'http://login.yunxiuw.com/Account/Login',
      data:{
        Username:'15281818136' ,
        Password:"1341881562"
      },
      dataType:"POST",
      success:function(res){
        console.log(res)
      },
      fail:function(error){
        console.log("错误信息打印",error);
      }
    })
  },
  /**
   * 全局变量
   */
  globalData:{
    userGroup:1
  }
})
