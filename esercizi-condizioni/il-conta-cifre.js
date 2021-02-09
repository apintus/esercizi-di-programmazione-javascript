/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/


var numero;

numero = window.prompt("Inserisci un numero");

if(numero <= 9999){
   console.log(numero.length + " cifre");
}
else{
  console.log("Il numero inserito è troppo grande");
}

