const BaseURL = "http://nshop.cpengx.cn/api/"

module.exports = {
    IndexUrl: BaseURL + "index/index",
    CategoryUrl: BaseURL + "catalog/index",
    // 通过id获取当前分类信息
    categoryCurrent: BaseURL + "catalog/current",
    // 通过id获取分类的商品详细信息
    goodsCategory: BaseURL + "goods/category",
    // 获取分类产品信息
    goodsList: BaseURL + "goods/list",
    // 获取商品详情
    goodsDetail: BaseURL + "goods/detail",
    // 添加商品到购物车
    addCart: BaseURL + "cart/add"
}