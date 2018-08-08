var app = getApp();
var server = require('../../utils/server');
var artciles = []
Page({
	data: {
		/*
		banners: [
			{
				id: 3,
				img: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/index/banner_3.jpg',
				url: '../about/about',
				name: '百亿巨惠任你抢'
			},
			{
				id: 1,
				img: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/index/banner_1.jpg',
				url: '',
				name: '告别午高峰'
			},
			{
				id: 2,
				img: 'http://wxapp.im20.com.cn/impublic/waimai/imgs/index/banner_2.jpg',
				url: '',
				name: '金牌好店'
			}
		],*/
		banners : [],
		artciles: []
	
	},
	onLoad: function () {
		console.log("onLoad")
		var self = this;
		
		wx.request({
      url: 'https://wx.hfzsgs.cn/artcile/get?hy=gongye&type=infos',
		  data: {},
		  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		  // header: {}, // 设置请求的 header
		  success: function(res){
				// important	
				
					self.setData({artciles:res.data})
					console.log("index,test",self.data.artciles)
		  },
		  fail: function(res) {
			// fail
					console.error(res)
					console.log("request artcile get fail")
		  },
		  complete: function() {
		
		  }
		})
   // get pics
		wx.request({
      url: 'https://wx.hfzsgs.cn/artcile/get?hy=gongye&type=pics',
		  data: {},
		  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		  // header: {}, // 设置请求的 header
		  success: function(res){
				// important	
				
					self.setData({banners:res.data})
					console.log("index,test",res)
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
onReady: function(){
	
	var self = this
},
	artcileToggle:function(e){

		    var cid = e.currentTarget.id, artciles = 								this.data.artciles;
		
    for (var i = 0, len = artciles.length; i < len; ++i) {
		
      if (artciles[i].cid == cid) {
		
        artciles[i].open = !artciles[i].open
      } else {
        artciles[i].open = false
      }
    }
    this.setData({
      artciles: artciles
    });

	},

	onShow: function () {
		var self = this
		console.log("index_show,test",self.data.artciles)
	},
	onScroll: function (e) {
		
	},
	
	tapBanner: function (e) {
		var name = this.data.banners[e.target.dataset.id].name;
	  wx.navigateTo({
			url: "../imgpage/imgpage?cid=" + this.data.banners[e.target.dataset.id].url_id,
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
		
});

