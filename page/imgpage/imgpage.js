// page/connact/connact.js
Page({
  data:{

    artcile:null

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var cid = options['cid']
    var self = this
    var url = 'https://wx.hfzsgs.cn/artcile/get?type=artcile&cid=' + cid;
    console.log(url)
    wx.request({
				url: url ,
		  data: {},
		  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		  // header: {}, // 设置请求的 header
		  success: function(res){
				// important	
					console.log("index,test",res)
					self.setData({artcile:res.data})
                    console.log("index,test",self.data.artcile)
				
		  },
		  fail: function(res) {
			// fail
					console.error(res)
					console.log("request artcile get fail")
		  },
		  complete: function() {
		
		  }
		})

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})