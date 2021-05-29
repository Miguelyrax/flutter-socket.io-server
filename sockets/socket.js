const {io} = require('../index');
//Mensajes de Socket 
io.on('connection', client => {
    console.log('Cliente conectado');
    client.on('disconnect', () => { 
        console.log('Cliente desconectado')
    });

    client.on('mensaje',(name)=>{
        console.log(name.nombre);

        io.emit('mensaje', { admin:'Nuevo mensaje' })
    });
});
