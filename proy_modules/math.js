//Se declara una variable constante llamada math y que es un objeto.
const math = { };

/* Se esta declarando una variable constante llamada invertirNumero y que es una función flecha y que
tendrá un parámetro numero que se invertira.*/
const invertirNumero = numero => {

 //Se declara una variable let llamada invertido y que tiene como valor 0. 
    let invertido = 0;

   /* Se esta creando un bucle que tiene como condicion en la que se dice que  numero debe ser 
   diferente a 0 */
    while (numero != 0) {

        /* Se esta declarando que invertido será igual a la operación de multiplicar 10 por el valor de invertido
        más el resultado de el residuo del valor del residuo de numero entre 10*/
        invertido = 10  * invertido + numero  % 10


        /* Se declara que se va a dividir el valor de numero entre 10 y que el resultado se redondeara en un 
        entero y este valor final se guardara en numero  */
        numero = (Math.floor(numero / 10))
    }

    /* Se solicita que se devuelva el valor de la variable invertido */
    return invertido
};

/* Se esta declarando una variable constante llamada invertirNumeroComoTexto y que es una función
flecha, que tendrá un parámetro numero que se invertira como texto.*/
const invertirNumeroComoTexto = numero => {


 /*Se esta declarando una variable constante llamada numeroInvertidoComoTexto que convertirá un número
 a string e invertira su orden.*/
    const numeroInvertidoComoTexto = numero.toString( ).split(" ").reverse( ).join(" ");
    
    /* Se solicita que se devuelva el valor de numeroInvertidoComoTexto */
    return numeroInvertidoComoTexto;
}

/* Se esta declarando una variable constante llamada invertirTexto y que es una función
flecha, que tendrá un parámetro texto que se invertira como texto.*/
const invertirTexto = texto => {


    //Se declara que se dividira una cadena de texto y se separara con un espacio.
    const splitText = texto.split(' ');

    //Se declara que se va a revertir el orden de los  elementos del texto.
    const reversedText = splitText.reverse( );

    /*Se declara que los elementos que se separaron en splitText se uniran en una cadena y el resultado
    quedara invertido*/
    const joinedText = reversedText.join(' ');

    /* Se solicita que se devuelva el valor de joinedTexto*/
    return joinedText
};

/* Se esta declarando una variable constante llamada invertirArreglo y que es una función
flecha, que tendrá un parámetro arreglo que se invertira como objeto.*/
const invertirArreglo = arreglo => {

     /*Se declara que se revertira un arreglo y que se guardara el resultado en la variable constante
     reverseObject*/
    const reverseObject = arreglo.reverse( );

    /* Se solicita que se devuelva el valor de reverseObject*/
    return reverseObject;
};

/* Se esta declarando una variable constante llamada conversionDatos y que es una función
flecha, que tendrá un parámetro*/
const conversionDatos = data => {
   
    /*Se declara una variable llamada dataType y que por medio de la expresión typeof estará determinando
    de que tipo de dato se trata*/
    let dataType = typeof data;

    //Se declara una variable llamada dataVar que guardara el valor de cada uno de los tipos de datos.
    let dataVar;

/* Se declara una condición en la que se especifica que si alguno de los parámetros dados cumple con 
ser igual a un espacio, null, undefined o su longitud es igual a 0 se obtendrá un mensaje que dice 'El 
valor ingresado está vacio o incorrecto' */
    if (data === ' ' || data === null || data === undefined || data.lenght === 0){
        dataVar = `El valor ingresado está vacio o incorrecto`;
    
    /* Se declara que si la condición anterior no se cumple, se procedera a evaluar diferentes opciones 
    (switch), que en el caso (case) de cumplir con el tipo de dato que se esta especificando se imprimara
    un mensaje en el que se informa que el tipo de valor ingresado es de tipo number, string u object y el 
    valor que tiene asignado, sino cumple con ninguna condición saldrá de esta por medio de (break). Si
    al final ninguna de las condiciones se cumple el valor de dataVar será (default), mostrará un mensaje 
    que diga que ' El valor ingresado no se puede invertir' */
    }else {
        console.log(`****************************************************************************`.blue);
        console.log(`*   `.blue +`El valor ingresado es de tipo: ${dataType}, con un valor de: ${data} `.green + `  *`.blue);
        console.log(`****************************************************************************\n`.blue);
        switch (dataType){
            case 'number':
                dataVar = invertirNumero(data);
                break;
            case 'string':
                dataVar = invertirTexto(data);
                break;
            case 'object':
                dataVar = invertirArreglo(data);
                break;
            default:
                dataVar = `El valor ingresado no se puede invertir`;
        }
    }
    /* Se solicita que se devuelva el valor de dataVar*/
    return dataVar;
}


/*Se declaran que las funciones que están después del paréntesis tienen propiedades, operaciones, 
condiciones, etc, que se podrán importar al módulo que las requiere invocando las palabras math. y el
nombre de cada una de estas.*/
math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
math.invertirTexto = invertirTexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

/* Se esta exportando math como un módulo para que al ser requerido por otro módulo, este pueda
importar las funciones requeridas al que lo esta solicitando */
module.exports = math;