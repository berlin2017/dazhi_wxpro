var app = getApp();
var server = require('../../utils/server');
Page({
	data: {},
	onLoad: function () {
	},
	onShow: function () {
		this.setData({
			userInfo: app.globalData.userInfo
		});
	},
  getUserInfo:function(e){
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    });
  }
});

