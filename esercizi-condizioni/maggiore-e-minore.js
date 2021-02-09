/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/


var numero1;
var numero2;
var numero3;
var numero4;
var maggiore=0;
var minore=0;

numero1 = window.prompt("Inserisci il primo numero: ");
numero2 = window.prompt("Inserisci il secondo numero: ");
numero3 = window.prompt("Inserisci il terzo numero: ");
numero4 = window.prompt("Inserisci il quarto numero: ");

if(numero1 > maggiore)
{
  maggiore = numero1;
}
else{
  minore = numero1;
}

if(numero2 > maggiore)
{
  maggiore = numero2;
}
else{
 minore = numero2;
}

if(numero3 > maggiore)
{
  maggiore = numero3;
}
else{
  minore = numero3;
}
if(numero4 > maggiore)
{
  maggiore = numero4;
}
else{
  minore = numero4;
}

console.log("Numero maggiore: " + maggiore);
console.log("Numero minore: " + minore);

