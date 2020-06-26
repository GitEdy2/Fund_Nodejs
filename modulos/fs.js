const fs = require('fs');

function Fs () {

}

Fs.prototype.leer = function(ruta, cb) {
    fs.readFile(ruta, (err,data) => {
        cb(data.toString());
    })
}

Fs.prototype.escribir = function(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(err) {
        if (err) {
            console.error('No he podido escribirlo', err);
        }
        else {
            console.log('Se ha creado correctamente');
        }      
    })
}

Fs.prototype.borrar = function(ruta, cb) {
    fs.unlink(ruta, function(err) {
        if (err) {
            console.error('No se ha podido borrar el archivo', err);
        }
        else {
            console.log('Se ha borrado el archivo');
        }     
    });
}

module.exports = Fs;

