var Callback = require('./async/callback.js');
var CallbackHell = require('./async/callbackHell.js');
var Promises = require('./async/promises.js');
var AsyncAwait = require('./async/asyncAwait.js');

var callback = new Callback();
var callbackHell = new CallbackHell();
var promises = new Promises();
var asyncAwait = new AsyncAwait();


//--callback--

/* console.log(`Iniciando proceso....`);
callback.hola('Edison', function() {
    callback.adios('Edison', function() {
        console.log(`Terminando proceso....`);
    })   
}); */

//--callbackHell--

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

/* console.log(`Iniciando proceso....`);
callbackHell.hola('Edison', function() {
    callbackHell.conversacion('Edison',2, function() {
        console.log('Proceso terminado');
    })
}); */

//--Promesas--

/* console.log('...Iniciando el proceso...');
promises.hola('Edison')
        .then(promises.hablar)
        .then(promises.hablar)
        .then(promises.adios)
        .then(nombre => {
            console.log('...Terminado el proceso...');
        })
        .catch(error => {
            console.error('Ha habido un error');
            console.error(error);
        }) */

//--Async/Await--

async function main() {
    let nombre = await asyncAwait.hola('Edison');
    await asyncAwait.hablar();
    await asyncAwait.hablar();
    await asyncAwait.hablar();
    await asyncAwait.adios(nombre);
    console.log('...Termina Proceso...');
}

console.log('...Iniciar Proceso...');
main();
//console.log('..Termina Proceso');




