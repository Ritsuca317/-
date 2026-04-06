Page({
  data: {
    resultTitle: "本局结果",
    resultText: "这里先放结果页静态文案，后续再接入胜负判断逻辑。"
  },

  // 页面加载时读取结果参数
  onLoad(options) {
    const { loser } = options

    if (loser) {
      this.setData({
        resultTitle: "游戏结束",
        resultText: `${loser} 猜中了炸弹，输掉了这一局`
      })
    }
  },

  // 跳转到游戏页，重新开始一局
  restartGame() {
    wx.redirectTo({
      url: '/pages/game/game'
    })
  },

  // 返回首页
  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})
