// Escribe tu código aquí:
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero;

const askForNumber = () => {
  rl.question('Ingresa un número positivo: ', (input) => {
    numero = parseInt(input);

    if (numero <= 0 || isNaN(numero)) {
      // Si el número no es positivo o no es un número válido, vuelve a preguntar.
      askForNumber();
    } else {
      // Cierra la interfaz de lectura después de obtener un número positivo.
      rl.close();
      // Puedes imprimir el número ingresado después de cerrar la interfaz.
      console.log('Número ingresado:', numero);
    }
  });
};

// Inicia el proceso preguntando al usuario.
askForNumber();
// En este ejemplo, readline se utiliza para leer la entrada del usuario de la consola en lugar de prompt, que es específico del navegador. Este código debería funcionar correctamente cuando lo ejecutes con Node.js en la consola.





