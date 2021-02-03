/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/


var nGatti;
var nGattixFila;
var nFile;
var controllo;
var nGattiMancanti;

nGatti = window.prompt("Inserisci il numero di gatti");
nGattixFila = window.prompt("Inserisci il numero di gatti per ogni fila");

controllo = nGatti/nGattixFila;

if(controllo % 1 !=0)
{
  nFile = Math.ceil(controllo);
  nGattiMancanti = (nFile*nGattixFila)-nGatti;
}

console.log("Numero di file: " + nFile);
console.log("Gatti mancanti: " + nGattiMancanti);

