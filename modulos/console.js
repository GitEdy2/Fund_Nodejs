function Console() {

}

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Y'
    }
]

Console.prototype.funcionConsole = () => {
    console.log('Hola');
    console.info('Info');
    console.error('Error');
    console.warn('Warn');
    console.table(tabla);
    console.log

    console.group('Conversacion');
    console.log('Hola');
    console.log('Bla bla bla bla');
    console.log('Adios');
    console.groupEnd('Conversacion');

    console.count('veces');
    console.count('veces');
    console.count('veces');
    console.countReset('veces');
    console.count('veces');
}

module.exports = Console;
