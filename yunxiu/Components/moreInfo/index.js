// Components/moreInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isMore:false
  },
  /**
   * 组件的方法列表
   */
  ready(){
  },
  methods: {
    /**
     * 当显示更多按钮被点击
     */
    infoMore(){
      let ismore = this.data.isMore;  
      console.log(ismore);
      this.setData({
        isMore:!ismore
      })    
      
    }
  }
})
