/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

// VARIANTE 1
/*
var N;
var array;
var arrayInvertito='';

N = prompt("Quando deve essere lungo l'array?");

array=Array.from({length: N}, () => Math.floor(Math.random() * 100));
console.log(array)

arrayInvertito = array.reverse();
console.log(arrayInvertito);
*/

//VARIANTE 2

var N;
var a = Array();
var arrayInvertito=Array();
var i,j;

j= N-1;
N = prompt("Quando deve essere lungo l'array?");

for(i=0;i<N;i++) {
  a[i] = Math.floor(Math.random() * 100);
}

i--;
for(j=0;j<N;j++) {
  arrayInvertito[j] = a[i];
  i--;
}

console.log(a);
console.log(arrayInvertito);



