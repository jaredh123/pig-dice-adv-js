import { Player, diceRoll } from './pig-dice';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

$(document).ready(function () {
  $("#playerOneDice").click(function (event) {
    event.preventDefault();
    $(this).addClass('magictime twisterInDown');
    var num = diceRoll();
    player1.pointLogic(num);
    $(".rollOutput").text(player1.currentNumber);
    $(".roundPointOutput").text(player1.roundPoints);
    $(".playerOneTotal").text(player1.points);
    player1.checkForWin();
  });

  $("#playerOneHold").click(function (event) {
    event.preventDefault();
    player1.addToPoints();
    $(".playerOneTotal").text(player1.points);
    player1.checkForWin();
  });

  $("#playerTwoDice").click(function (event) {
    event.preventDefault();
    $(this).addClass('magictime twisterInDown');
    var num = diceRoll();
    player2.pointLogic(num);
    $(".rollOutput").text(player2.currentNumber);
    $(".roundPointOutput").text(player2.roundPoints);
    $(".playerTwoTotal").text(player2.points);
    player2.checkForWin();
  });

  $("#playerTwoHold").click(function (event) {
    event.preventDefault();
    player2.addToPoints();
    $(".playerTwoTotal").text(player2.points);
    player2.checkForWin();
  });
});
