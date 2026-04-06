Page({
  data: {},

  // 跳转到游戏页
  startGame() {
    wx.navigateTo({
      url: '/pages/game/game'
    })
  }
})
