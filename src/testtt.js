// function solution(A, B) {
//   //   var card1, card2;
//   var alecWin = 0;

//   var cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//   var alecCards = A.split("");
//   var bobCards = B.split("");

//   for (var i = 0; i < alecCards.length; i++) {
//     alecIndex = cards.indexOf(alecCards[i]);
//     bobIndex = cards.indexOf(bobCards[i]);
//     if (alecIndex > bobIndex) alecWin++;
//   }

//   return alecWin;
// }
// console.log(solution("23JK4", "352Q8"));
