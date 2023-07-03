// app.js
App({
  onLaunch() {
    // 获取右上角胶囊布局信息
    const menuBottom = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (result) => {
        // 获取胶囊与顶部状态栏之间的距离
        const menuToNav = menuBottom.top - result.statusBarHeight;

        const navHeight = result.statusBarHeight + menuBottom.height + menuToNav * 2;
        this.globalData.navHeight = navHeight
        this.globalData.menuBtn = menuBottom
        this.globalData.navTitleHeight = menuToNav * 2 + menuBottom.height
        this.globalData.statusBarHeight = result.statusBarHeight
      },
    })
  },
  globalData: {
    navHeight: 0,
    bgColor: '#f2cac3',
    buyCart: {
        cartList: [],
        cartTotal: {}
    }
  }
})
