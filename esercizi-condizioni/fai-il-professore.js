/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/


var v;

v = window.prompt("Inserisci un voto");

switch (true) {
  case (v<18): 
  console.log('Insufficiente');
  break;

  case (18 <= v <21): 
  console.log('sufficiente');
  break;

  case (21 <= v <24): 
  console.log('buono');
  break;

  case (24 <= v <27): 
  console.log('distinto');
  break;

  case (27 <= v <29): 
  console.log('ottimo');
  break;

  case (v === 30): 
  console.log('eccellente');
  break;

  default:
    console.log("Numero inserito non valido");
  
}