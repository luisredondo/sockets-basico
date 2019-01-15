var socket = io();
// ON - Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// ON - Escuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// EMIT - Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});