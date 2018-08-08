var app = getApp();
var input_content = {'trade':'工业','shebao':'有','xse':'500万以下','location':'合肥地区内'}
var condition = {A:0,B:0,C:0,D:0,company:null};

Page({
  data: {
    array: ['工业', '农业', '建筑', '服务','文化','科技'],
    location: ['有', '无'],
    shebao:['有','无'],
    xse:['500万以下','500万-2000万','2000万-5000万','5000万以上'],
    array_index: 0,
    shebao_index:0,
    location_index:0,
    xse_index:0,
    input_content:{}
  },
  bindChange:function(e){

    //console.log(e);
    input_content[e.currentTarget.id] = e.detail.value;
    condition['company'] = e.detail.value
    
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      array_index: e.detail.value
      
    });
    input_content[e.currentTarget.id] = this.data.array[e.detail.value];
    condition['A'] = e.detail.value
  },
   bindLocationChange: function(e) {
    this.setData({
      location_index: e.detail.value
    })
    input_content[e.currentTarget.id] = this.data.location[e.detail.value];
    condition['D'] = e.detail.value
  },
  bindShebaoChange: function(e) {
    this.setData({
      shebao_index: e.detail.value
    })
    input_content[e.currentTarget.id] = this.data.shebao[e.detail.value];
    condition['B'] = e.detail.value
  },
  bindXiaoShouEChange: function(e) {
    this.setData({
      xse_index: e.detail.value
    })
    input_content[e.currentTarget.id] = this.data.xse[e.detail.value];
    condition['C'] = e.detail.value
  },


  bindButtonClick:function(e){
    // get project list and set the global data
    console.log("ccc",condition["company"])
    if(condition["company"].length == 0)
    {
      console.log("fff")
      wx.showModal({
        title: '提醒',
        content: '公司名不能为空',
        showCancel:false,
        confirmText:"确定",
        success: function(res) {
            if (res.confirm) {
            console.log('用户点击确定')
            }
        }
        })
        return
    }
    
    app.setGlobalData(condition)

    var url = '../project/project?company=' + input_content['company_name']
    console.log(url)
    wx.navigateTo({
      //url: '../logs/logs'
      url: url
    })
  }
})
