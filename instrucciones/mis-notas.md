/////Regular expressions

 `/^abc[0-9]{2,3}$/.test(abc11)` da true
    ^ => hace que tenga que arrancar con lo que esté entre parentesis
    [0-9] => abarca números de 0 a 9
    {2,3} => se deben colocar de 2 a 3 números
    $ => especifica que termina ahí

`/[a-z]+/.test();`
    lo único que le pido es que tenga una letra o más

`/[a-z]+/i.test();`
`/[A-z]+/.test();`
    aquí le pido además que no le importe si es mayúscula o minúscula

`/[A-z]+ [a-z]+/.test('AlfreDo profumieri');`
    aquí le pido que el primero tenga mayúsculas y minúsculas y el segundo no

`/^[a-z]+$/i.test()`

/////Objetos

let errores = {

    ciudad: "Hay un error",
    nombre: "Hay un error"

    };

console.log(Object.keys(errores)); //devuelve solo las keys => [ciudad, nombre]
console.log(Object.value(errores)); //devuelve solo los values => ["Hay un error", "Hay un error"]

////Foreach

en la función forEach usamos una función de callback
es una función que no la llamamos nosotros si no que la llama javascript. Es decir no se invoca con parentesis como "functionRandom()"
 


