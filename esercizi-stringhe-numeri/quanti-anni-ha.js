/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/


var year = new Date().getFullYear();
var userYear;
var yearPerson = 0;
var anniMancanti =0;


do{
  userYear = window.prompt("Inserisci la tua data di nascita");
  
}while(isNaN(userYear));

yearPerson = year - userYear;
anniMancanti = 100 - yearPerson;

console.log("La tua età è: " + yearPerson);
console.log("Ti mancano " + anniMancanti + " anni per arrivare a 100");




  


