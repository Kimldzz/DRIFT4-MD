function calcularEdad(fechaNacimiento) {
  const fechaActual = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  const mesActual = fechaActual.getMonth();
  const mesNac = fechaNac.getMonth();

  if (mesActual < mesNac || (mesActual === mesNac && fechaActual.getDate() < fechaNac.getDate())) {
    edad--;
  }

  return edad;
}

// Ejemplo de uso:
const fechaNacimiento = '1990-01-01';
const edad = calcularEdad(fechaNacimiento);
console.log(`La edad es: ${edad} años`);
