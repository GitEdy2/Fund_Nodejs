function CallbackHell () {

}
    
CallbackHell.prototype.hola = function(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000)
}

CallbackHell.prototype.hablar = function(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla.....');
        callbackHablar();
    }, 1000)
}

CallbackHell.prototype.adios = function(nombre, otroCallback) {
    setTimeout(function () {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1000)
}

CallbackHell.prototype.conversacion = function(nombre, veces, callback) {  
    if (veces >= 0) {
        this.hablar(function () {
            CallbackHell.prototype.conversacion(nombre, --veces, callback);
        })
    } else {
        CallbackHell.prototype.adios(nombre,callback);
    }
}


module.exports = CallbackHell;