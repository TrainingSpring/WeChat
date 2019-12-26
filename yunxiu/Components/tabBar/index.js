let app = getApp();
Component({
  properties:{
    selected:{
      type:Number,
      value:0
    },
    jump:{
      type:Boolean,
      value:true
    },
    data:{
      type:JSON,
      value:{}
    }
  },
  /**
   * color: 未选中时的颜色
   * selectedColor: 选中后的颜色
   * userGroup: 当前用户属于哪个组
   * list: 导航页列表
   *  pagePath: 导航页地址
   *  icon: 该导航标签图标
   *  text: 导航栏标题
   *  main: 是否为主要的__ 这里是扫一扫
   */
  data: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    userGroup:app.globalData.userGroup,
    list: [{
      pagePath: "/pages/index/index",
      icon:"icon-zhuye",
      text: "主页",
      main:false
    },
     {
        pagePath: "/pages/logs/logs",
        icon:"icon-scancode",
        text: "扫一扫",
        main:true
    },
    {
      pagePath: "/pages/my/index",
        icon:"icon-wodedangxuan",
        text: "我的",
        main:false
    }
  ],
  engineerList:[
    {
      pagePath: "/pages/index/index",
      icon:"icon-daijiedingdan",
      text: "待接订单",
      main:false
    },{
      pagePath:"/engineerPages/accepted/index?params=accepted",
      icon:"icon-xiuli",
      text: "已接订单",
      main:false
    },
    {
       pagePath: "/pages/logs/logs",
       icon:"icon-scancode",
       text: "扫一扫",
       main:true
   },
   {
     pagePath: "/engineerPages/allOrder/index",
      icon:"icon-quanbudingdan1",
      userGroup:1,
      text: "全部订单",
      main:false
    },{
      pagePath: "/pages/my/index",
        icon:"icon-wodedangxuan",
        text: "我的",
        main:false
    }
  ],
  },
  attached() {
  },
  methods: {
    switchTab(e) {
        const data = e.currentTarget.dataset;
        const url = data.path;
        wx.switchTab({ url })
      
    },
    scanCode(){
      wx.scanCode();
    }
  }
})
