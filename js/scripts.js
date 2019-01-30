// Business Logic -----
function Player() {
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
        $("#playerTwo").show();
        $("#playerOne").hide();
    }
}

Player.prototype.pointLogic2 = function(roll) {
    if (roll != 1) {
        this.currentNumber = roll;
        this.roundPoints += roll;
    } else {
        alert(`You have rolled a ${roll}!`);
        this.roundPoints = 0;
        $("#playerTwo").hide();
        $("#playerOne").show();
    }
}

Player.prototype.addToPoints = function() {
    this.points += this.roundPoints;
    $("#playerTwo").show();
    $("#playerOne").hide();
}

Player.prototype.addToPoints2 = function() {
    this.points += this.roundPoints;
    $("#playerTwo").hide();
    $("#playerOne").show();
}

var diceRoll = function () {
    return Math.floor(Math.random() * 6) + 1;   
};


// UI Logic -----

$(document).ready(function() {
    $("form#playerOneForm").submit(function(event) {
        event.preventDefault();
        var num = diceRoll();
        player1.pointLogic(num);
        $(".rollOutput").text(player1.currentNumber);
        $(".roundPointOutput").text(player1.roundPoints)
        console.log(player1.roundPoints);
    });

    $("#playerOneHold").click(function(event) {
        event.preventDefault();
        player1.addToPoints();
        console.log(player1.points);
    });

    $("form#playerTwoForm").submit(function(event) {
        event.preventDefault();
        var num = diceRoll();
        player2.pointLogic2(num);
        $(".rollOutput").text(player2.currentNumber);
        $(".roundPointOutput").text(player2.roundPoints);
        console.log(player2.roundPoints);
    });

    $("#playerTwoHold").click(function(event) {
        event.preventDefault();
        player2.addToPoints2();
        console.log(player2.points);
    });

});
