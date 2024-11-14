document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addressForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const orderTotal = document.getElementById('orderTotal');
    const orderItems = document.getElementById('orderItems');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí normalmente enviarías los datos del formulario al servidor
        // Por ahora, solo mostraremos el mensaje de confirmación
        form.style.display = 'none';
        confirmationMessage.style.display = 'block';
    });
});