/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/



var n1;
var n2;
var operazione;
var somma;
var differenza;
var prodotto;
var divisione;
var modulo;
var potenza;
var media;

n1 = window.prompt("Inserisci il numero 1");
n2 = window.prompt("Inserisci il numero 2");
operazione=window.prompt("Inserisci il tipo di operazione da eseguire: \n 1. Somma \n 2. Sottrazione \n 3. Moltiplicazione \n 4. Divisione \n 5. Modulo \n 6. Potenza \n 7. Media");

switch(operazione){
  case '1':
    somma = n1+n2;
    console.log("La somma è: " + somma);
    break;

  case '2':
    differenza = n1-n2;
    console.log("La differenza è: " + differenza);
    break;

  case '3':
    prodotto = n1*n2;
    console.log("Il prodotto è: " + prodotto);
    break;

  case '4':
    divisione = n1/n2;
    console.log("la divisione è: " + divisione);
    break;

    case '5':
      if(n1 % 1 ===0 && n2 % 1 === 0){
        modulo = n1 % n2;
        console.log("Il modulo è: "+ modulo);
      } 
      else{
        console.log("I numeri non sono di tipo interi, quindi non è possibile effettuare questa operazione");
      }
      break;

  case '6':
    potenza = n1**n2;
    console.log("la potenza di " +  n1 +" è " + potenza);
    break; 

  case '7':
    media = (n1+n2)/2;
    console.log("la media di è: " + media);
    break; 

    default:
      console.log("La scelta non è valida")

}