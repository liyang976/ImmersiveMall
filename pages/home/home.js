const api = require("../../services/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banner: [],
        channels: [
            {
                id: 1, 
                name: "居家", 
                sort_order: 1, 
                icon_url: "https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png", 
                url: "/pages/category/category?id=1005000"
            },
            {
                id: 2, 
                name: "餐厨", 
                sort_order: 2, 
                icon_url: "https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png", 
                url: "/pages/category/category?id=1005001"
            },
            {
                id: 3, 
                name: "配件", 
                sort_order: 3, 
                icon_url: "https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png", 
                url: "/pages/category/category?id=1008000"
            },
            {
                id: 4, 
                name: "服装", 
                sort_order: 4, 
                icon_url: "https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png", 
                url: "/pages/category/category?id=1005002"
            },
            {
                id: 5, 
                name: "志趣", 
                sort_order: 5, 
                icon_url: "https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif", 
                url: "/pages/category/category?id=1019000"
            }
        ],
        topicList: [],
        newGoodsList: [],
        categoryList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const res = await api.getIndexData()
        this.setData({
            ...res.data
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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