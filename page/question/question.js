Page({

    data:{

        ques1:null,
        ques2:null,
        ques3:null,
        ques4:null,
        score:{ques1:0,ques2:0,ques3:0,ques4:0}

    },
    onLoad:function(option){
        console.log("fff",option)
        this.setData({ques1:option['ques1']})
        this.setData({ques2:option['ques2']})
        this.setData({ques3:option['ques3']})
        this.setData({ques4:option['ques4']})
    },

    radioChange: function(e) {
    console.log(e.currentTarget.id)
    var score = this.data.score
    if(score[e.currentTarget.id] != 0)
    {
        if(e.detail.value == "no")
            score[e.currentTarget.id] = 0
    }
    else    
    {
        if(e.detail.value == "yes")
            score[e.currentTarget.id] = 10
    }
    
    this.setData({score:score})
    console.log(this.data.score)
  },

  bindButtonClick:function()
  {
        var score = this.data.score
        var sum = score["ques1"] + score["ques2"] + score["ques3"] + score["ques4"] + 50
        console.log(sum)
       wx.showModal({
        title: '结果',
        content: '此项目评分结果:'+sum,
        showCancel:true,
        confirmText:"确定",
        cancelText:"联系大之",
        cancelCorlor:"#3CC51F",
        success: function(res) {
            console.log("tt",res)
            if (res.confirm)
            {
                console.log("ttt")
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
            else if (!res.confirm) {
                console.log("ffffff")
                wx.navigateTo({
      //url: '../logs/logs'
                    url: "../connact/connact"
                })
            }
        }
        })
  }

})