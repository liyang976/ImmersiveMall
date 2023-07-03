const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ...app.globalData,
        cartList: [],
        cartTotal: {},
        checkAll: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(app.globalData)
        const res = wx.getStorageSync('buyCart');
        this.setData({
            ...res
        })
        console.log(res);
    },

    // 商品选中事件
    onChange(e) {
        let index = e.currentTarget.dataset.index;
        this.data.cartList[index].checked = this.data.cartList[index].checked == 0 ? 1 : 0;
        this.setData({
            cartList: this.data.cartList
        })
        this.calcTotal()
        this.isTotalAll()
    },

    calcTotal() {
        let cartTotal = {
            checkedGoodsAmount: 0,
            checkedGoodsCount: 0,
            goodsAmount: 0,
            goodsCount: 0
        }

        this.data.cartList.forEach(item => {
            cartTotal.goodsAmount += item.retail_price;
            cartTotal.goodsCount += item.number * item.retail_price;

            if(item.checked) {
                cartTotal.checkedGoodsCount += item.number;
                cartTotal.checkedGoodsAmount += item.number * item.retail_price
            }

            this.setData({
                cartTotal: cartTotal
            })

        })

    },

    // 是否全选
    isTotalAll() {
        let result = !this.data.cartList.some(item => {
            return item.checked === 0;
        })
    
        this.setData({
            checkAll: result
        })
    },

    // 全选/全不选
    toggleCheckAll() {
        if(this.data.checkAll) {
            this.data.cartList.forEach(item => {
                item.checked = 0
            })
            this.setData({
                cartList: this.data.cartList,
                checkAll: false
            })
        } else {
            this.data.cartList.forEach(item => {
                item.checked = 1
            })
            this.setData({
                cartList: this.data.cartList,
                checkAll: true
            })
        }

        this.calcTotal()
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