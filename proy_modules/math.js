//Se declara una variable constante llamada math y que se inicializa con un objeto vacio.
const math = {};

/* Se declara una variable constante llamada invertirNumero y que es una función flecha y que
tiene como parámetro a numero.*/
const invertirNumero = numero => { 

 //Se declara una variable let llamada invertido y que se inicializa en 0. 
    let invertido = 0;

   // Se crea un bucle while que tiene como condición que numero debe ser diferente a 0
    while (numero !=0){

        /* Se multiplica el número invertido por 10, lo cual "mueve" sus dígitos un lugar hacia la izquierda.
        Se suma el último dígito del número original (numero % 10) al número invertido.*/
        invertido = 10 * invertido + numero % 10

        /* Se declara que se va a dividir el valor de numero entre 10 y que el resultado se redondeara en un 
        entero y este valor final se guardara en numero  */
        numero = (Math.floor(numero / 10))
    }

    // Se retorna el valor de la variable invertido
    return invertido
};

/* Se declara una variable constante llamada invertirNumeroComoTexto y que es una función
flecha, que tendrá un parámetro numero que se invertira como texto.*/
const invertirNumeroComoTexto = numero => {

 /*Se declara una variable constante llamada numeroInvertidoComoTexto que convertirá un número
 a string e invertira su orden.*/
    const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
    
    /* Se retorna el valor de numeroInvertidoComoTexto */
    return numeroInvertidoComoTexto;
};

/* Se declara una variable constante llamada invertirTexto, que es una función flecha y que tendrá un 
parámetro texto que se invertira como texto.*/
const invertirTexto = texto => {

    /*Se declara una variable de tipo de constante llamada splitText que almacena el resultado de dividir una 
    cadena de texto y separarla con un espacio.*/
    const splitText = texto.split('');

    /*Se declara una variable constante llamada reversedText que almacena el resultado de revertir el orden de
    los  elementos del texto.*/
    const reversedText = splitText.reverse( );

    /*Se declara una variable constante llamada joinedText que almacena el resultado de la unión de los elementos
    revertidos anteriormente*/
    const joinedText = reversedText.join('');

    /* Se retorna el valor de joinedTexto*/
    return joinedText;
};

/*Se declara una variable constante llamada invertirArreglo y que es una función
flecha, que tendrá un parámetro arreglo que se invertira como objeto.*/
const invertirArreglo = arreglo => {

     /*Se declara una variable constante llamada reverseObject, que revertira un arreglo y el resultado se 
     guardara en la variable*/
     const reverseObject = arreglo.reverse();

    /* Se retorna el valor de reverseObject*/
    return reverseObject;
};

/*Se declara una variable constante llamada conversionDatos y que es una función flecha, que tiene como
parámetro a data*/
const conversionDatos = data => {
   
    /*Se declara una variable llamada dataType y que por medio de la expresión typeof estará determinando
    de que tipo de dato se trata*/
    let dataType = typeof data;

    //Se declara una variable llamada dataVar que guardara el valor de cada uno de los tipos de datos.
    let dataVar;

/*Se usa un condicional if que tiene como condición que si alguno de los parámetros es igual a un strin vacio,
null, undefined o su longitud es igual a 0 se obtendrá un mensaje que dice 'El valor ingresado está vacio o 
incorrecto' */
    if(data === '' || data === null || data === undefined || data.length === 0) {
        dataVar = 'El valor ingresado está vacio o incorrecto';
    
    //Si la condición anterior no se cumple: 
    }else {
        //Se imprime en la consola un mensaje indicando de que tipo de dato se trata y su valor
        console.log(`****************************************************************************`.blue);
        console.log(`*   `.blue + `El valor ingresado es de tipo: ${dataType}, con un valor de: ${data}`  + `   *`.blue);
        console.log(`****************************************************************************\n`.blue);
        //Se usa un switch que recibira como parámetro a dataType
        switch(dataType){
            //En el caso de que el dato sea de tipo de number
            case 'number' :
                //Se imprime en la consola el mensaje indicando el tipo de dato y su valor
                dataVar = invertirNumero(data);
                //Se sale del caso
                break;
            //En el caso de que el dato sea de tipo de string
            case 'string' :
                //Se imprime en la consola el mensaje indicando el tipo de dato y su valor
                 dataVar = invertirTexto(data);
                 //Se sale del caso
                break;
            //En el caso de que el dato sea de tipo de object
            case 'object' :
                //Se imprime en la consola el mensaje indicando el tipo de dato y su valor
                dataVar = invertirArreglo(data);
                //Se sale del caso
                break;
            //Si ninguno de los casos anteriores se cumple
            default:
                //Se imprime en la consola el siguiente mensaje
                dataVar = 'El valor ingresado no se puede invertir';
            }
        }
    /* Se retorna el valor de dataVar*/
    return dataVar;
}

/*Se asignan cada una de las funciones como propiedades del objeto Math. Esto crea métodos asociados con
el objeto Math, y que se podrán importar al módulo que las requiere invocando la palabras math. y el
nombre de cada una de estas.*/
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

/* Se esta exportando math como un módulo para que al ser requerido por otro módulo, este pueda
importar las funciones requeridas al que lo esta solicitando */
module.exports = math;