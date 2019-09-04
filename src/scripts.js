export function Game(row) {
  this.row = row;
}

var newGame = new Game([99, 33, 1]);

Game.prototype.numberChecker = function() {

  var allowedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var failedNumbers = [];

  for (var i = 0; i < this.row.length; i++) {
    if (this.row[i] >= 10) {
      failedNumbers.push(this.row[i]);
    }
  }
  return failedNumbers
};
