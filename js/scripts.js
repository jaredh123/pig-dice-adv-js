// Business Logic -----
function Player(name) {
    this.name = name,
    this.points = 0,
    this.roundPoints = 0,
    this.currentNumber = 0
}

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

Player.prototype.pointLogic = function(roll) {
    if (roll != 1) {
        this.currentNumber = roll;
        this.roundPoints += roll;
    } else {
        alert(`You have rolled a ${roll}!`);
        this.roundPoints = 0;
        $("#playerTwo").toggle();
        $("#playerOne").toggle();
    }
}

Player.prototype.addToPoints = function() {
    this.points += this.roundPoints;
    $("#playerTwo").toggle();
    $("#playerOne").toggle();
    this.roundPoints = 0
}

var diceRoll = function () {
    return Math.floor(Math.random() * 6) + 1;   
};

Player.prototype.checkForWin = function() {
    if (this.points >= 100) {
        alert("You've reached 100 points " + this.name + ", YOU WON!!")
    }
}

// UI Logic -----

$(document).ready(function() {
    $("#playerOneDice").click(function(event) {
        event.preventDefault();
        $(this).addClass('magictime twisterInDown');
        var num = diceRoll();
        player1.pointLogic(num);
        $(".rollOutput").text(player1.currentNumber);
        $(".roundPointOutput").text(player1.roundPoints);
        $(".playerOneTotal").text(player1.points);
        player1.checkForWin();
    });

    $("#playerOneHold").click(function(event) {
        event.preventDefault();
        player1.addToPoints();
        $(".playerOneTotal").text(player1.points);
        player1.checkForWin();
    });

    $("#playerTwoDice").click(function(event) {
        event.preventDefault();
        $(this).addClass('magictime twisterInDown');
        var num = diceRoll();
        player2.pointLogic(num);
        $(".rollOutput").text(player2.currentNumber);
        $(".roundPointOutput").text(player2.roundPoints);
        $(".playerTwoTotal").text(player2.points);
        player2.checkForWin();
    });

    $("#playerTwoHold").click(function(event) {
        event.preventDefault();
        player2.addToPoints();
        $(".playerTwoTotal").text(player2.points);
        player2.checkForWin();
    });
});
