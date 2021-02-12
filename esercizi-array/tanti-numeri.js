/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/


var a=[3,5,10,2,8];
var arrayMin = Array();
var arrayMax = Array();
var media;
var min;
var max=0;
var somma=0;
var i,j;


max = Math.max.apply(null,a);
for(i=0;i<a.length;i++) {
  somma += a[i];

}
media = somma/a.length;

i=0;

for(j=0;j<a.length;j++) {

  if(a[i] < media) {
    arrayMin.push(a[i]);
  }

  //Variante 2
  if(a[i]>media) {
    arrayMax.push(a[i]);
  }

  i++;
}
console.log(max);
console.log(media);
console.log(arrayMin);

//Variante 2
console.log(arrayMax);