function Promises() {

}

Promises.prototype.hola = function(nombre) {
    return new Promise(function(resolve,reject) {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
            reject('Hay un error');
        }, 1000)
    });  
}

Promises.prototype.hablar = function(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla.....');
            resolve(nombre);
            reject('Hay un error');
        }, 1000)
    })    
}

Promises.prototype.adios = function(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adios, ${nombre}`);
            resolve();
            reject('Hay un error');
        }, 1000)
    });
    
}

module.exports = Promises;