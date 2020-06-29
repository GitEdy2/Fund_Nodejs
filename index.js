var Callback = require('./async/callback.js');
var CallbackHell = require('./async/callbackHell.js');
var Promises = require('./async/promises.js');
var AsyncAwait = require('./async/asyncAwait.js');
var Fs = require('./modulos/fs.js');
var Console = require('./modulos/console.js');

var callback = new Callback();
var callbackHell = new CallbackHell();
var promises = new Promises();
var asyncAwait = new AsyncAwait();
var file = new Fs();
var consola = new Console();


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

/* async function main() {
    let nombre = await asyncAwait.hola('Edison');
    await asyncAwait.hablar();
    await asyncAwait.hablar();
    await asyncAwait.hablar();
    await asyncAwait.adios(nombre);
    console.log('...Termina Proceso...');
}

console.log('...Iniciar Proceso...');
main(); */
//console.log('..Termina Proceso');


//--Global--

/* let i = 0;

let intervalo = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++
}, 1000); */

/* setImmediate(function() {
    console.log('Hola');
}); */

//console.log(process);

//console.log(__filename);

//--Fyle System--

/* file.leer(__dirname + '/modulos/archivo.txt', console.log);
file.escribir(__dirname + '/modulos/archivo1.txt', 'Soy un archivo nuevo', console.log);
file.borrar(__dirname + '/modulos/archivo1.txt', console.log);
 */

 //--Console--

//consola.funcionConsole();

//--Errores(try/catch)
