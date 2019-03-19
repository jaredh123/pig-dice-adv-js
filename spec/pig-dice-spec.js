import { Player } from "../src/pig-dice.js";

describe('Player', function() {

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

  it('should test for checkForWin', function() {
    var player = new Player("tanTheMan", 100, 2, 3);
    expect(player.checkForWin()).toEqual(true);
  });

  it('should test for diceRoll', function() {
    var player = new Player("tanTheMan", 1, 2, 3);
    var arr = [1, 2, 3, 4, 5, 6];
    expect(arr).toContain(player.diceRoll());
  });

  it('should test for addToPoints', function() {
    var player = new Player("tanTheMan", 5, 5, 9);
    player.addToPoints();
    expect(10).toEqual(player.points);
  });

  it('should test for pointLogic', function() {
    var player = new Player("tanTheMan", 5, 5, 9);
    player.pointLogic(3);
    expect(8).toEqual(player.roundPoints);
  });
});