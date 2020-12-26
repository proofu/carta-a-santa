// Uso de console.assert para validar nombre
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'El campo nombre debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('1232134'), 
      'El campo nombre solo acepta letras', 
      'validarNombre no validó que el campo solo acepte letras'
  );

  console.assert(
      validarNombre('Alfredo') === '',
      'validarNombre no está recibiendo nombres estandar'
  );
}

probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacío',
        'Validar ciudad no validó que el campo no esté vacío',
    );
  
    console.assert(
        validarCiudad(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El campo ciudad debe tener menos de 50 caracteres',
        'Validar ciudad no validó que el campo sea menor a 50 caracteres',
    );

    console.assert(
        validarCiudad('Santa Fe') === '',
        'validarCiudad no está recibiendo nombres válidos'
    );
  }
  
  probarValidarCiudad();

  function probarValidarRegalo(){

    console.assert(
        validarRegalo('') === 'La descripción del regalo debe tener al menos 1 caracter',
        'Validar regalo no validó que la descripción esté vacía'
    );

    console.assert(
        validarRegalo('11111111111111111111111111111111111111111111111111111111111111111') === 'La descripción debe tener menos de 50 caracteres',
        'Validar regalo no validó que el campo tenga menos de 50 caracteres'
    );

    console.assert(
        validarRegalo('Bicicleta') === '',
        'validarRegalo no está recibiendo nombres válidos'
    );

    console.assert(
        validarRegalo(',.,.,.'), 
        'El campo de descripción solo puede tener números y letras', 
        'validarRegalo no está comprobando que solo haya números y letras'
    );

  };

  probarValidarRegalo();
