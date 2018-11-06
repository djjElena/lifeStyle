Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    mysize: 0,
    myonebottom: 0,
    myoneright: 0,

    mytwobottom: 0,
    mytworight: 0,

    mythreebottom: 0,
    mythreeright: 0,

    myanimation:'animation:deg 2s',

    future:[],
    sk:{},
    today:{},
    city:"上海"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if (options.city){
      that.setData({
        city: options.city
      })
    }
  },
  seqreq:function(){
    var that = this;
    var city = that.data.city;
    if(city){
    wx.request({
      url:"http://v.juhe.cn/weather/index?key=35573938c6b086d5320b2e91161bc607",
      method:"GET",
      data: {
        cityname: city
      },
      success:function(res){
        if (res.data.result){
          that.setData({
            future: res.data.result.future,
            sk: res.data.result.sk,
            today: res.data.result.today
          })
        }else{
          wx.showToast({
            title: '城市信息不存在!',
            duration: 1000
          })
        }
      },
    })
    }else{
      return;
    }
  },
  // 获取输入框中的数据
  bindKeyInput:function(e){
    var that = this;
    that.setData({
      city: e.detail.value
    })
  },
  showButton: function () {
    var size = this.data.mysize == 0 ? 35 : 0;
    var onebottom = this.data.myonebottom == 0 ? 240 : 0;
    var oneright = this.data.myoneright == 0 ? 120 : 0;

    var twobottom = this.data.mytwobottom == 0 ? 130 : 0;
    var tworight = this.data.mytworight == 0 ? 200 : 0;

    var threebottom = this.data.mythreebottom == 0 ? 30 : 0;
    var threeright = this.data.mythreeright == 0 ? 120 : 0;

    var animation = this.data.myanimation == 'animation:deg 2s'
    this.setData({
      mysize: size,
      myonebottom:onebottom,
      myoneright:oneright,

      mytwobottom: twobottom,
      mytworight: tworight,

      mythreebottom: threebottom,
      mythreeright: threeright,

      myanimation: animation
    })
  },
  // 实现页面跳转
  citys:function(){
    wx.navigateTo({
      url: "/pages/citylist/citylist"
    })
  },
  about: function () {
    wx.navigateTo({
      url: "/pages/about/about"
    })
  },
  seting: function () {
    wx.navigateTo({
      url: "/pages/seting/seting"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.seqreq();
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
    this.seqreq();
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
