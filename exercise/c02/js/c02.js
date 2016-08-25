var greeting = 'Howdy ';
var name = 'Niles';
var message = ', please check your order:';

var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var e1 = document.getElementById('greeting');
e1.textContent = welcome;

var e1Sign = document.getElementById('userSign');
e1Sign.textContent = sign;

var e1Tiles = document.getElementById('tiles');
e1Tiles.textContent = tiles;

var e1SubTotal = document.getElementById('subTotal');
e1SubTotal.textContent = '$' + subTotal;

var e1SubTotal = document.getElementById('shipping');
e1SubTotal.textContent = '$' + shipping;

var e1GrandTotal = document.getElementById('grandTotal');
e1GrandTotal.textContent = '$' + grandTotal;
