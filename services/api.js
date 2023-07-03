const common = require("./common")
const util = require("../utils/util")

function getIndexData() {
    return util.request(common.IndexUrl)
}

function getCategoryData() {
    return util.request(common.CategoryUrl)
}

function getCurrentCategoryById(id) {
    return util.request(common.categoryCurrent, {id});
}

function getGoodsCategory(id) {
    return util.request(common.goodsCategory, {id})
}

function getGoodsList(id, page, size) {
    return util.request(common.goodsList, {id, page,})
}

function getGoodsDetail(id) {
    return util.request(common.goodsDetail, {id})
}

function addCartGoods(goodsId, number, productId) {
    return util.request(common.addCart, {
        goodsId,
        number,
        productId
    }, 'POST')
}

module.exports = {
    getIndexData,
    getCategoryData,
    getCurrentCategoryById,
    getGoodsCategory,
    getGoodsList,
    getGoodsDetail,
    addCartGoods
}