/**
 * Scrivi un programma che stampi i numeri da 1 a 100, 
 * ma per i multipli di 3 stampi anche "Fizz" di fianco al numero
 * e per i multipli di 5 stampi "Buzz". 
 * Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". 
 */

var numMax = 100;

for(var i = 1; i < numMax + 1; i++){
    var message = '';
    //Multipli di 3
    if(i % 3 === 0){
        message = 'Fizz';
    }
    //Multipli di 5
    if(i % 5 === 0){
        //Controlliamo se il numero è un multiplo di 3 e 5
        message = message ? message+'Buzz' : 'Buzz';
    }

    //Multipli di 6
    if(i % 6 === 0){
        //Controlliamo se il numero è un multiplo di 3 e 5
        message = message ? message+'Boolean' : 'Boolean';
    }
    console.log(i + ' ' + message);
}



