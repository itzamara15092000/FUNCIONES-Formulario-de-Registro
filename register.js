ddocument.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();

    // Validar campos
    if (!nombres || !apellidos || !correo || !contraseña) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    // Validar formato del correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario o procesar los datos
    alert('Registro exitoso.'); // Mensaje de éxito
  });

