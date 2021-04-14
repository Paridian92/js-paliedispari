//chiedo all'utente gli input
var scelta = prompt('scegli pari o dispari');
var numUtente = prompt('scegli un numero da 1 a 5');



//scrivo i messaggi di errore in caso gli input non siano corretti
if(scelta != ('pari') && ('dispari')){
  alert('scelta incorretta, scrivi "pari" o "dispari" ')
}

if(numUtente<1 || numUtente>5){
  alert('scelta incorretta, scrivi un numero compreso tra 1 e 5')
}

console.log('il tuo numero è ' + numUtente)
console.log(randomNum(1, 5) + " è il numero dell'avversario")

console.log(oddEven(numUtente, randomNum))


if((scelta = 'pari') && (oddEven === 0)){
  console.log('complimenti hai vinto!')
  
}else if((scelta ='dispari') && (oddEven != 0)){
  console.log('complimenti hai vinto!')
}else if((scelta = 'pari') && (oddEven != 0 )){
  console.log('mi dispiace, hai perso')
}else if((scelta ='dispari') && (oddEven === 0 )){
   console.log('mi dispiace, hai perso')
}






//creo le funzioni 

function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function oddEven(mioNum, suoNum) {
  return (mioNum + suoNum) %2 
  
}
