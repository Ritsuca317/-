Page({
  data: {
    currentMin: 1,
    currentMax: 100,
    bombNumber: 0,
    currentPlayerIndex: 0,
    inputValue: "",
    message: ""
  },

  // 页面加载时初始化一局游戏
  onLoad() {
    this.initGame()
  },

  // 初始化游戏基础数据
  initGame() {
    const bombNumber = Math.floor(Math.random() * 100) + 1

    this.setData({
      currentMin: 1,
      currentMax: 100,
      bombNumber,
      currentPlayerIndex: 0,
      inputValue: "",
      message: "请输入 1 到 100 之间的整数"
    })
  },

  // 实时保存输入框内容
  handleInput(event) {
    this.setData({
      inputValue: event.detail.value
    })
  },

  // 提交猜测时先做基础校验
  submitGuess() {
    const { inputValue, currentMin, currentMax, bombNumber, currentPlayerIndex } = this.data
    const value = inputValue.trim()

    if (!value) {
      this.setData({
        message: "请输入数字"
      })
      return
    }

    if (!/^-?\d+$/.test(value)) {
      this.setData({
        message: "请输入整数"
      })
      return
    }

    const guessNumber = Number(value)

    if (guessNumber < currentMin || guessNumber > currentMax) {
      this.setData({
        message: "请输入范围内的数字"
      })
      return
    }

    if (guessNumber === bombNumber) {
      const loser = `玩家${currentPlayerIndex + 1}`

      wx.redirectTo({
        url: `/pages/result/result?loser=${loser}`
      })
      return
    }

    if (guessNumber < bombNumber) {
      this.setData({
        currentMin: guessNumber + 1,
        currentPlayerIndex: currentPlayerIndex === 0 ? 1 : 0,
        inputValue: "",
        message: "猜小了，请下一位继续"
      })
      return
    }

    if (guessNumber > bombNumber) {
      this.setData({
        currentMax: guessNumber - 1,
        currentPlayerIndex: currentPlayerIndex === 0 ? 1 : 0,
        inputValue: "",
        message: "猜大了，请下一位继续"
      })
    }
  }
})
