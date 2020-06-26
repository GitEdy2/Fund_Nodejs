var Callback = require('./async/callback.js');
var CallbackHell = require('./async/callbackHell.js');

// var callback = new Callback();
var callbackHell = new CallbackHell();


/* console.log(`Iniciando proceso....`);
callback.hola('Edison', function() {
    callback.adios('Edison', function() {
        console.log(`Terminando proceso....`);
    })   
}); */


/* console.log(`Iniciando proceso....`);
callbackHell.hola('Edison', function() {
    callbackHell.hablar(function() {
        callbackHell.hablar(function() {
            callbackHell.hablar(function() {   
                callbackHell.adios('Edison', function() {
                    console.log(`Terminando proceso....`);
                });
            });
        });  
    });   
}); */

console.log(`Iniciando proceso....`);
callbackHell.hola('Edison', function() {
    callbackHell.conversacion('Edison',2, function() {
        console.log('Proceso terminado');
    })
});


