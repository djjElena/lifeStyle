// pages/citylist/citylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityList: [],
    citynames:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  citylist: function () {
    var that = this;
    wx: wx.request({
      url: 'http://web-up.top:3000/city/list',
      data: '',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        that.setData({
          cityList: res.data.data.cities,
        })
      },
      fail: function (res) {
        throw res
      }
    })
  },
  // 通过单击事件实现页面跳转并且传递参数
  cityName:function(e){
    var that = this;
    wx.redirectTo({
      url: '/pages/logs/logs?city=' + e.target.dataset.a
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.citylist();
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