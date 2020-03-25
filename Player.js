class Player {
  static get VERSION() {
    return '👑';
  }

  static betRequest(gameState, bet) {
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
