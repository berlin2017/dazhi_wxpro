var server = require('./utils/server');
App({
	globalData: {
		hasLogin: false,
		artciles: null,
		condition:{},
		name : null,
		company:null,
		phone:null,
		email:null
	},
	
	onLaunch: function () {
		console.log('App Launch')	
		var self = this;
		console.log("lll")
		var rd_session = wx.getStorageSync('rd_session');
		console.log('rd_session', rd_session)
		if (!rd_session) {
			console.log("need login")
			self.login();
		} else {
			wx.checkSession({
				success: function () {
					// 登录态未过期
					console.log('登录态未过期')
					self.rd_session = rd_session;
					self.getUserInfo();
				},
				fail: function () {
					console.log("guoqi ")
					//登录态过期
					self.login();
				}
			})
		}
		
	},
	setGlobalData: function(data){
		console.log("set condition")
		var self = this;
		self.globalData.condition = data

	},
	onShow: function () {
		console.log('App Show')
		console.log(this.globalData.artciles)
	},
	onHide: function () {
		console.log('App Hide')
	},
	
	rd_session: null,
	login: function() {
		var self = this;
		wx.login({
			success: function (res) {
				console.log('wx.login', res)
				server.getJSON('/wx/session/get', {code: res.code}, function (res) {
					console.log('setUserSessionKey', res)
					self.rd_session = res.data.rd_session;
					self.globalData.hasLogin = true;
					wx.setStorageSync('rd_session', self.rd_session);
					self.getUserInfo();
				});                             
			}
		});
		
	},
	getUserInfo: function() {
		var self = this;
		wx.getUserInfo({
			success: function(res) {
				console.log('getUserInfo', res)
				self.globalData.userInfo = res.userInfo;
				server.getJSON('/wx/signature/check', {
					rd_session: self.rd_session,
					result: res
				}, function (res) {
					console.log('checkSignature', res)
					if (!res.data.check) {
						// TODO:验证有误处理
					}
				});
			}
		});
		
	}
})
