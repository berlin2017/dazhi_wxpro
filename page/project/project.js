var app = getApp();
var server = require('../../utils/server');

var projects = []
Page({
	data: {
        artciles: app.globalData.artciles,
        company:"",
        projects:[]
    },
  
    onLoad: function (option) {
      this.setData({company:option['company']})
		  console.log("onLoad")
      var self = this
      console.log(app.globalData.condition)

      wx.request({
        url: 'https://wx.hfzsgs.cn/artcile/get?hy=gongye&type=projects',
		  data: app.globalData.condition,
		  method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		  // header: {}, // 设置请求的 header
		  success: function(res){
        console.log(res.data)
				// important
					self.setData({projects:res.data})
          console.log(self.data.projects)
		  },
		  fail: function() {
			// fail
		  },
		  complete: function() {
		
		  }
		})
      
    },
    bindDafen:function(e){

        var cid = e.currentTarget.id,projects = this.data.projects;
        var ques1,ques2,ques3,ques4
        //console.log(cid);

        for (var i = 0, len = projects.length; i < len; ++i)    {
          if (projects[i].cid == cid) {
              ques1 = projects[i].question1
              ques2 = projects[i].question2
              ques3 = projects[i].question3
              ques4 = projects[i].question4
           } 
       }

        wx.navigateTo({
          url: '../question/question?ques1='+ques1+"&ques2="+ques2+"&ques3="+ques3+"&ques4="+ques4,
          
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
    },

    artcileToggle:function(e){
		    var cid = e.currentTarget.id, projects = this.data.projects;
    for (var i = 0, len = projects.length; i < len; ++i) {
      if (projects[i].cid == cid) {
        projects[i].open = !projects[i].open
      } else {
        projects[i].open = false
      }
    }
    this.setData({
      projects: projects
    });

	},
})