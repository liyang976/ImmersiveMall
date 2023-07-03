let app = getApp();
const api = require("../../services/api")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ...app.globalData,
        categoryList: [],
        categoryListName: [],
        currentCategory: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        const res = await api.getCategoryData();
        this.data.categoryListName = res.data.categoryList.map(item => {
            return {
                text: item.name
            }
        })
        this.setData({
            ...res.data,
            categoryListName: this.data.categoryListName
        })
    },

    async onClickNav(e) {
        let index = e.detail.index;
        const res = await api.getCurrentCategoryById(this.data.categoryList[index].id);
        this.setData({
            currentCategory: res.data.currentCategory
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