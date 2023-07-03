const api = require("../../services/api")
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ...app.globalData,
        id: null,
        show: false,
        currentProd: {},
        chooseText: "",
        cartCount: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // options = options && options.id ? options.id : {id: "1181000"}
        if(options) {
            this.setData({
                ...options
            });

            const res = await api.getGoodsDetail(options.id);
            
            /** 详情页样式操作 */
            let style = "<style>p{width:100%;height:auto;margin:0;padding:0;}p img{width:100%;height:auto;margin:0;padding:0;}</style>"
            res.data.info.goods_desc = style + res.data.info.goods_desc;
            let richText = res.data.info.goods_desc;

            richText = richText.replace(
                /style=""/gi, 
                'style="width:100%;height:auto;margin:0;padding:0;"'
            )
            richText = richText.replace(
                /\<p\>/gi, 
                '<p style="width:100%;margin:0;padding:0;display:flex;">'
            )

            res.data.info.goods_desc = richText;

            let currentProd = res.data.productList[0];
            let temp_arr = currentProd.goods_specification_ids.split('_')
            
            let chooseText = temp_arr.reduce((pre, item, index) => {
                let content = '';
                res.data.specificationList[index].valueList.forEach((value) => {
                    if(value.id == item) {
                        content = value.value;
                    }
                })
                pre+=content + ' ';
                return pre;
            }, "")

        
            this.setData({
                ...res.data,
                currentProd: currentProd,
                chooseText: chooseText
            })

            console.log(this.data.currentProd);
        }
    },

    // 选择规格弹窗
    popGoodsSpec() {
        this.setData({
            show: true
        })
    },

    // 选择规格
    chooseSpec(e) {
        let id = e.target.dataset.id;
        let index = e.target.dataset.index;

        let resList = this.data.productList.filter((item, i) => {
            return item.goods_specification_ids.indexOf(id) != -1
        })

        if(resList.length === 0) {
            wx.showToast({
              title: '所选规格暂时无货',
            })
        } else {
            let temp = this.data.currentProd.goods_specification_ids;
            let temp_arr = temp.split('_');
            temp_arr[index] = id;
            let news_ids = temp_arr.join('_');

            let res = resList.some(item => {
                return item.goods_specification_ids == news_ids
            })

            if(res) {
                resList.forEach(item => {
                    if(item.goods_specification_ids === news_ids) {
                        this.setData({
                            currentProd: item
                        })
                    }
                })
            }
        }
    },

    async addCarts() {
        let currentProd = this.data.currentProd;

        if(currentProd.goods_number < 1) {
            wx.showToast({
              title: '库存不足，请选择其它商品',
            })
        } else {

            let res = await api.addCartGoods(currentProd.goods_id, 1, currentProd.id);

            if(res.errno === 400) {
                wx.showToast({
                  title: res.errmsg,
                  icon: "error"
                })
                return;
            }
            app.globalData.buyCart = res.data
            wx.setStorageSync('buyCart', res.data);
            this.setData({
                cartCount: res.data.cartTotal.goodsCount
            })
        }
    },

    goCart() {
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})