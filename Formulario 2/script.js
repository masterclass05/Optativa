window.onload = function() {
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let errores = [];
        let nombre = document.getElementById('nombre').value.trim();
        let apellido = document.getElementById('apellido').value.trim();
        let email = document.getElementById('email').value.trim();
        let telefono = document.getElementById('telefono').value.trim();
        let dni = document.getElementById('dni').value.trim();
        let password = document.getElementById('password').value;
        let edad = document.getElementById('edad').value;
        let fechaNacimiento = document.getElementById('fechaNacimiento').value;
        let sexo = document.getElementById('sexo').value;
        let condiciones = document.getElementById('condiciones').checked;

        if (nombre.length < 2) errores.push("El nombre debe tener al menos 2 caracteres.");
        if (apellido.length < 2) errores.push("El apellido debe tener al menos 2 caracteres.");
        if (!/^\S+@\S+\.\S+$/.test(email)) errores.push("El email no es válido.");
        if (!/^\d{9}$/.test(telefono)) errores.push("El teléfono debe tener 9 dígitos numéricos.");
        if (!/^\d{8}[A-Za-z]$/.test(dni)) errores.push("El DNI debe tener 8 números seguidos de una letra.");
        if (password.length < 6) errores.push("La contraseña debe tener mínimo 6 caracteres.");
        if (edad < 1 || edad > 120 || !edad) errores.push("La edad debe estar entre 1 y 120 años.");
        if (!fechaNacimiento) errores.push("Debe ingresar su fecha de nacimiento.");
        if (!sexo) errores.push("Seleccione un sexo.");
        if (!condiciones) errores.push("Debes aceptar las condiciones.");

        if (errores.length > 0) {
            alert("Corrige los siguientes errores:\n\n" + errores.join('\n'));
        } else {
            alert("Formulario enviado correctamente ");
            document.getElementById('registroForm').reset();
        }
    });
}