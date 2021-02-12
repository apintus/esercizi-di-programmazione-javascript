/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

/*
var array = new Array();

array = Array.from({length: 10}, () => Math.floor(Math.random() * 10)+1);
console.log(array);

array.sort(function(a,b){
  return a-b;
});

console.log(array);
*/


//Variante 2

var array = new Array();
var arrayOutput = new Array();
var i,j;
var temp;

array = Array.from({length: 10}, () => Math.floor(Math.random() * 50)+1);
console.log(array);

while(!done) {
  var done =true;
  for (i=1;i<=array.length;i+=1) {
    if(array[i-1]> array[i]){
      done = false;
      temp = array[i-1];
      array[i-1] = array[i];
      array[i] = temp;
    }
  }

}


console.log(array);
