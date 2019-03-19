// Business Logic -----
export function Player(name, points, roundPoints, currentNumber) {
  this.name = name,
  this.points = points,
  this.roundPoints = roundPoints,
  this.currentNumber = currentNumber;
}

Player.prototype.pointLogic = function (roll) {
  if (roll != 1) {
    this.currentNumber = roll;
    this.roundPoints += roll;
  } else {
    alert(`You have rolled a ${roll}!`);
    this.roundPoints = 0;
    $("#playerTwo").toggle();
    $("#playerOne").toggle();
  }
};

Player.prototype.addToPoints = function () {
  this.points += this.roundPoints;
  $("#playerTwo").toggle();
  $("#playerOne").toggle();
  this.roundPoints = 0;
};

Player.prototype.diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

Player.prototype.checkForWin = function () {
  if (this.points >= 100) {
    alert("You've reached 100 points " + this.name + ", YOU WON!!");
    return true;
  } else {
    return false;
  }
};

