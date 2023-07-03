let app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        navTitle: {
            type: String,
            value: "商城"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        ...app.globalData,
        isShow: false
    },

    lifetimes: {
        attached() {
            let pagesArr = getCurrentPages();
            if(pagesArr.length > 1) {
                this.setData({
                    isShow: true
                })
            }
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        goHome() {
            wx.switchTab({
              url: '/pages/home/home',
            })
        },

        goBack() {
            wx.navigateBack({
                delta: 0
            })
        }
    }
})
