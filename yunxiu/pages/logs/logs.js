//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    selected:1
  },
  onLoad: function () {
    this.setData({
      selected:1
      })
  }
})
