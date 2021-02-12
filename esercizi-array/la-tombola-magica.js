/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var arrayPrincipale = new Array();
var arraySecondario = new Array();
var i,j;
var count=0;

arrayPrincipale = Array.from({length: 10}, () => Math.floor(Math.random() * 90)+1);
arraySecondario = [1,2,3,4,5,6,7,8,9,10];
j=0;

console.log(arrayPrincipale);
for(i=0;i<10;i++){
  
  for(j=0;j<10;j++){

    if(arrayPrincipale[i] === arraySecondario[j]){
      count +=1;
    }
  }
  
}
console.log(count);

switch(count){

  case 2:
  console.log("Hai fatto AMBO");
  break;

  case 3:
  console.log("Hai fatto TERNA");
  break;

  case 4:
  console.log("Hai fatto QUATERNA");
  break;

  case 5:
  console.log("Hai fatto CINQUINA");
  break;

  case 10:
  console.log("Hai fatto TOMBOLA");
  break;

  default:
    console.log("Mi dispiace, hai perso!");

  
}



