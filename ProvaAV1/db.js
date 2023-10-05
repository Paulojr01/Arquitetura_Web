mongoose.connect('mongodb://localhost/Maps', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error);
    });

    