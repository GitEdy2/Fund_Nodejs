function AsyncAwait() {

}

AsyncAwait.prototype.hola = async function(nombre) {
    return new Promise(function(resolve,reject) {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`);
            resolve(nombre);
            reject('Hay un error');
        }, 1000)
    });  
}

AsyncAwait.prototype.hablar = async function() {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla.....');
            resolve();
            reject('Hay un error');
        }, 1000)
    })    
}

AsyncAwait.prototype.adios = async function(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adios, ${nombre}`);
            resolve();
            reject('Hay un error');
        }, 1000)
    });
    
}

module.exports = AsyncAwait;