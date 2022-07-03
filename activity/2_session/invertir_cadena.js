// una clase a la que llamaremos "InvertirCadena"
class InvertirCadena {
    // Un atributo llamado cadenaInvertir que sea una cadena vacía.
    cadenaInvertir = '';
    // Una función en formato arrow function, que tome el atributo cadenaInvertir 
    // e imprima en pantalla el resultado invertido
    do = () => {
        if (this.cadenaInvertir == '') throw "Cadena no definida.";
        return this.cadenaInvertir.split('').reverse().join('');
    }
}

// Ahora instancia la clase en un objeto que llamaremos invertirCadena
let invertirCadena = new InvertirCadena();

try{ // ¿Cómo podemos hacer para que nuestro código no  rompa al ejecutarse?
    invertirCadena.do();
} catch (e) {
    console.log(e);
}

// cambia el valor a cadenaInvertir y vuelve a llamar la función
invertirCadena.cadenaInvertir = "Hola Mundo!";
console.log(invertirCadena.do());

// intenta acceder al siguiente método invertirCadena.nuevoMetodo()
invertirCadena.nuevoMetodo?.(); // optional chaining