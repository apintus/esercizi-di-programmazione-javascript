/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

var arrayA = new Array();
var arrayB = new Array();
var arrayC = new Array();
var i,j;
var operazione;
var somma =0;
var differenza =0;
var prodotto =0;
var rapporto = 0;

j=0;

arrayA = Array.from({length: 10}, () => Math.floor(Math.random() * 10)+1);
arrayB = Array.from({length: 10}, () => Math.floor(Math.random() * 10)+1);
console.log(arrayA);
console.log(arrayB);

operazione = prompt("Scegli tra queste operazione da effettuare: \n 1. Addizione \n 2. Sottrazione \n 3. Moltiplicazione \n 4. Divisione");
/*
for(i=0;i<10;i++){

  switch(operazione){
    case '1':
      for(j=0;j<10;j++){
        arrayC[j] = arrayA[i+1] + arrayB[i];
      }
      break;
        
  }

}*/

switch(operazione){
  case '1':
    for(i=0;i<10;i++){
      arrayC[j] = arrayA[i] + arrayB[i];
      j++;

    }

}

console.log(arrayC);

