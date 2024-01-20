//Se carga la libreria colors para permitir el uso de estilos de colores en la terminal
require('colors');

//Se declara una variable de tipo constante llamada math que almacena los datos del módulo solicitado
//Se carga el código que contiene el archivo oper_math.js que se encuentra en la carpeta modules.
const math = require('./proy_modules/math.js')

// Se declara una función flecha constante llamada main, que es asincrónica
const main = async () => {

    //Se imprime en la consola un mensaje, que el texto sea de color rojo y se añade diseño a la interfaz
    console.log(`*****************`.cyan);
    console.log(`* `.cyan + 'hola SENA CBA'.red + ` *`.cyan);
    console.log(`*****************\n`.cyan);

    //Se declara una variable constante llamada numeros que se inicializa con un arreglo de numeros
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];

    /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la constante 
   numeros, cada vez que este realice la iteración el valor se asigna en numero.*/
    for (const numero of numeros) {

        /* Se declara una variable constante llamada invertidoComoNumero que estara exportando del módulo
        math el código allí contenido.*/
        const invertidoComoNumero = math.invertirNumero(numero);

        /* Se declara una variable constante llamada invertidoComoCadena que estara exportando del módulo
        math el código allí contenido.*/
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);

        /*Se solicita imprimir en la consola el resultado de invertir un número como número y como cadena,
       y que el texto dado como resultado sea de color azul y se le añade diseño a la interfaz*/
        console.log(`****************************************************************************`.magenta);
        console.log(`*  `.magenta + "El número '%s' es '%s' invertido como número, y '%s' como cadena" + `  *`.magenta,
            numero, invertidoComoNumero, invertidoComoCadena);
        console.log(`****************************************************************************\n`.magenta);
    }

    // Se declara una variable constante llamada textos, que se inicializa con un arreglo de strings.
    const textos = ['Hola Sena', 'Ficha 2798618', 'Análisis y desarrollo de software']

    /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la constante 
   textos, cada vez que este realice la iteración el valor se asigna en texto.*/
    for (const texto of textos) {

        /* Se declara una variable constante llamada textoInvertido que estara exportando del módulo
        math el código allí contenido.*/
        const textoInvertido = math.invertirTexto(texto);

        //Se solicita imprimir en la consola el texto inicial y el resultado de la inversión
        console.log(`****************************************************************************************************`.yellow);
        console.log(`* `.yellow + "El texto '%s' se invierte como '%s'" + `*`.yellow, texto, textoInvertido);
        console.log(`****************************************************************************************************\n`.yellow);
    }

    /*Se declara una variable constante llamada datos, a la cual se le ha asignado un arreglo con tres elementos
    que son un number, un string y otro arreglo */
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']]

    /* Se utiliza for para crear un bucle que se ejecute con todos los argumentos dados en la variable let 
    datos, cada vez que este realice la iteración el valor se asigna en dato.*/
    for (let dato of datos) {

        /* Se declara una variable constante llamada datoInvertido que estara exportando del módulo
        math el código allí contenido.*/
        const datoConvertido = math.conversionDatos(dato);

        //Se solicita imprimir en la consola el resultado de la conversión de cada dato.
        console.log(`**************************************************`.red);
        console.log(`*  `.red + `El resultado de conversión es : ${datoConvertido}` + `  *`.red);
        console.log(`**************************************************\n`.red);

    }
}

//Se invoca la función main
main();