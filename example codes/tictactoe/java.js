

var allSquares = document.querySelectorAll('.square');

var square1 = allSquares[0];
var square2 = allSquares[1];
var square3 = allSquares[2];
var square4 = allSquares[3];
var square5 = allSquares[4];
var square6 = allSquares[5];
var square7 = allSquares[6];
var square8 = allSquares[7];
var square9 = allSquares[8];



var count = 0;

//mark x box
var move = function(){

  if (this.innerText==="X"|| this.innerText==="O") {
    return null;
  } else if (count % 2 === 0) {
    this.innerText = 'X';
    count++;
  } else {
  this.innerText = 'O';
  count++;
}
};

for (var i = 0; i < 9; i++){
allSquares[i].addEventListener('click',move);
}

// //mark o box
// var markO = function(){
//   this.innerText = 'O';
// };
//
// for (var i = 0; i < 9; i++){
// allSquares[i].addEventListener('click',markO);
// }

// //mark second box
// var secondX = function(){
//   square2.innerText = 'X';
// };
// square2.addEventListener('click',secondX);
//
// //mark third box
// var thirdX = function(){
//   square3.innerText = 'X';
// };
// square3.addEventListener('click',thirdX);
//
// //mark fourth box
// var fourthX = function(){
//   square4.innerText = 'X';
// };
// square4.addEventListener('click',fourthX);
//
// //mark fifth box
// var fifthX = function(){
//   square5.innerText = 'X';
// };
// square5.addEventListener('click',fifthX);
//
// //mark sixth box
// var sixth = function(){
//   square6.innerText = 'X';
// };
// square6.addEventListener('click',sixth);
//
// //mark seventh box
// var seventh = function(){
//   square7.innerText = 'X';
// };
// square7.addEventListener('click',seventh);
//
// //mark eigth box
// var eigth = function(){
//   square8.innerText = 'X';
// };
// square8.addEventListener('click',eigth);
//
// //mark ninth box
// var ninth = function(){
//   square9.innerText = 'X';
// };
// square9.addEventListener('click',ninth);
