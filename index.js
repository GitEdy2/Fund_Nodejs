var Callback = require('./async/callback.js');

var callback = new Callback();


console.log(`Iniciando proceso....`);
callback.hola('Edison', function() {
    callback.adios('Edison', function() {
        console.log(`Terminando proceso....`);
    })   
});




