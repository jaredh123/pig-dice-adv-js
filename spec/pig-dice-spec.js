import { Player } from "../src/pig-dice.js";

describe('Player', function() {

  it('should test for working', function() {
    var player = new Player("tanTheMan", 1, 2, 3);
    var arr = [1, 2, 3, 4, 5, 6];
    expect(arr).toContain(player.diceRoll());
  });

  it('should test for points', function() {
    var player = new Player("tanTheMan", 1, 2, 3);
    expect(player.points).toEqual(1);
  });

  it('should test for roundPoints', function() {
    var player = new Player("tanTheMan", 1, 2, 3);
    expect(player.roundPoints).toEqual(2);
  });

  it('should test for currentNumber', function() {
    var player = new Player("tanTheMan", 1, 2, 3);
    expect(player.currentNumber).toEqual(3);
  });
});