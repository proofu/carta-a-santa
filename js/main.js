function validarNombre(nombre){

    if (nombre.length === 0) {
        return ('El campo nombre debe tener al menos 1 caracter');        
    } else if (nombre.length >= 50) {
        return ('El campo nombre debe tener menos de 50 caracteres');
    } else if(!/^[a-z]+$/i.test(nombre)){
        return ('El campo nombre solo acepta letras')
    } else{
        return '';
    }

};

function validarCiudad(ciudad){

    if (ciudad.length === 0) {
        return ('El campo ciudad no puede estar vacío');        
    } else if (ciudad.length >= 50) {
        return ('El campo ciudad debe tener menos de 50 caracteres');
    } else {
        return '';
    }

};

function validarRegalo(descripcionRegalo){

    if (descripcionRegalo.length === 0) {
        return ('La descripción del regalo debe tener al menos 1 caracter');        
    } else if (descripcionRegalo.length >= 50) {
        return ('La descripción debe tener menos de 50 caracteres');
    } else if(!/[a-z0-9]+$/.test(descripcionRegalo)){ 
        return 'El campo de descripción solo puede tener números y letras';
    }else {
        return '';
    }

};

function validarFormulario(event){    
    
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const $arrayErrores = document.querySelectorAll("#errores li");
    $arrayErrores.forEach(function(cur){
        cur.remove();
    });

    const esExitoso = manejarErrores(errores) === 0;
    

    if (esExitoso) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        window.setTimeout(function(){
            window.location.href = '\wishlist.html';
        }, 5*1000);
    }

    event.preventDefault();
};

function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let cantidadErrores = 0;    

    keys.forEach(function(key){
        let error = errores[key];

        if (error) {

            cantidadErrores++;
            $form[key].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;           

            $errores.appendChild($error);

        } else {
            $form[key].className = "";
        }
    });

    return cantidadErrores;
    
};

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
