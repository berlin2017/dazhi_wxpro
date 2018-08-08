// page/account/account.js

Page({
  data:{
    name : "",
    company : "",
    phone : "",
    email : ""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var rd_session = wx.getStorageSync('rd_session');
    console.log(rd_session)
     var self  = this
    // Get user info based on rd_session
    wx.request({
      url: 'https://wx.hfzsgs.cn/userinfo/get?op=get&rd_session=' + rd_session,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success 
          var result = res.data
       
          //wx.setStorageSync('name',result.name);
          
          var ret = self.setData({name:result.name,
                        company:result.company,
                        phone:result.phone,
                        email:result.email
                        })
           
      },
      fail: function() {
        // fail
        
      },
      complete: function() {
        // complete
      }
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var self = this
   
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  bindChange : function(e){
    console.log(e.detail.value)
    this.data[e.currentTarget.id] = e.detail.value
   
  },

  bindButtonClick : function(){

    console.log(this.data)
    var rd_session = wx.getStorageSync('rd_session');
    
    // Upload user info based on rd_session
    wx.request({
      url: 'https://wx.hfzsgs.cn/userinfo/get?op=set&rd_session=' + rd_session + "&name=" + this.data.name + "&company=" + this.data.company + "&phone=" + this.data.phone + "&email=" + this.data.email,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success

        wx.showModal({
        title: '结果',
        content: '提交成功',
        showCancel:false,
        confirmText:"确定",
        success: function(res) {
            if (res.confirm) {
            wx.navigateBack({
             delta: 1, // 回退前 delta(默认为1) 页面
             success: function(res){
               // success
             },
             fail: function() {
               // fail
             },
             complete: function() {
               // complete
             }
           })
            }
        }
        })
        
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })


  }
})