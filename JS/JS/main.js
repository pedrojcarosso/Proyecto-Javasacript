let nombre = prompt ("ingresa tu nombre")

console.log('Nombre:' + nombre)

let origen = prompt ('ingrese su pais de origen')

console.log('Pais de Origen:' + origen)

const nacimiento = prompt ('ingresa tu año de nacimiento')


console.log('Año de nacimiento:' + nacimiento)

let edad = (2026-nacimiento)

let dni = prompt ('ingresa tu numero de dni')

dni = parseInt(dni)

console.log(dni)

console.log(typeof dni)

alert ('Bienvenido ' + nombre + ' de ' + origen + ' de ' + edad + ' años ')