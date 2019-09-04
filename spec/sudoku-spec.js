import { Game } from './../src/scripts.js';

describe('Game', function() {

  it('should correctly determine whether an entered number is an allowed value', function() {
    var newGame = new Game([5, 8, 9]);
    expect(newGame.numberChecker()).toEqual([]);
  });
});
