const api = require("../../services/api");
const { goodsList } = require("../../services/common");
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ...app.globalData,
        id: null,
        parent_id: null,
        active: 0,
        categoryList: [],
        goodsCount: 0,
        totalPage: 0,
        pageSize: 10,
        currentPage: 1,
        goodsList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        if(options) {
            this.setData({
                ...options
            });

            (async () => {
                let res = await api.getGoodsCategory(options.id);
                this.setData({
                    categoryList: res.data.brotherCategory
                })
            })();
    
            (async () => {
                let result = await api.getGoodsList(options.id, 1, 10)
                this.setData({
                    goodsList: result.data.goodsList
                })
            })();
        }
    },

    onChange(e) {
        let index = e.detail.index;
        (async () => {
            let result = await api.getGoodsList(this.data.categoryList[index].id, 1, 10)
            this.setData({
                goodsList: result.data.goodsList
            })
        })();
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