function Callback () {

}
    
Callback.prototype.hola = function(nombre, miCallback) {
    setTimeout(function () {
        console.log(`Hola, ${nombre}`);
        miCallback(nombre);
    }, 1000)

Callback.prototype.adios = function(nombre, otroCallback) {
    setTimeout(function () {
        console.log(`Adios, ${nombre}`);
        otroCallback();
    }, 1500)
}


}

module.exports = Callback;
