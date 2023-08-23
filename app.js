//Se declara require para importar colors, desde la carpeta node_modules.
require('colors');

/*se declara una función const de nombre math para que importe de la carpeta proy_module las funciones.
y operaciones que se ejecutaran*/
const math = require('./proy_modules/math.js')

// Se declara una función flecha const main, que es asincrónica
const main = async ( ) => {

    /*Se solicita imprimir en la consola el mensaje que esta entre paréntesis, que añada una línea de espacio
    y que el texto sea de color rojo*/
    console.log('hola SENA CBA\n'.red);

     //Se declara una variable constante llamada numeros a la que se le asigna un arreglo de numeros
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];

     /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la constante 
    numeros, cada vez que este realice la iteración el valor se asigna en numero.*/
    for (const numero of numeros) {

    /* Se declara una variable constante llamada invertidoComoNumero que estara exportando del módulo
    math los parámetros requeridos.*/
        const invertidoComoNumero = math.invertirNumero(numero);

    /* Se declara una variable constante llamada invertidoComoCadena que estara exportando del módulo
    math los parámetros requeridos.*/
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);

     /*Se solicita imprimir en la consola el resultado de invertir un número como número y como cadena,
    y que el texto dado como resultado sea de color azul.*/
        console.log("El número '%s' es '%s' invertido como número, y '%s' como cadena".blue, numero,
        invertidoComoNumero, invertidoComoCadena);
    }

    // Se declara una variable constante llamada textos, a la cual se la ha asignado un arreglo de strings.
    const textos = ['Hola Sena', 'Ficha 2798618', 'Análisis y desarrollo de software']

     /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la constante 
    textos, cada vez que este realice la iteración el valor se asigna en texto.*/
    for(const texto of textos) {

    /* Se declara una variable constante llamada textoInvertido que estara exportando del módulo
    math los parámetros requeridos.*/
        const textoInvertido = math.invertirTexto(texto);
    
    /*Se solicita imprimir en la consola el resultado de invertir el texto dado y que el texto resultado
     sea de color rojo.*/
        console.log("El texto '%s' se invierte como '%s' ".red, texto, textoInvertido);
    }

    /*Se declara una variable constante llamada datos, a la cual se le ha asignado un arreglo con tres elementos
    que son un number, un string y otro arreglo */
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'] ]

    /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la variable let 
    datos, cada vez que este realice la iteración el valor se asigna en dato.*/
    for (let dato of datos) {

          /* Se declara una variable constante llamada datoInvertido que estara exportando del módulo
    math los parámetros requeridos.*/
        const datoConvertido = math.conversionDatos(dato);

         /*Se solicita imprimir en la consola el resultado de la conversión del dato dado y que el texto resultado
     sea de color amarillo.*/
        console.log(`El resultado de conversión es : ${datoConvertido}`.yellow);

    }
}

//
main( );