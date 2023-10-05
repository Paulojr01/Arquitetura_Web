const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb+srv://Maps:YIt6453Vmi45SIOI@cluster0.5j9erod.mongodb.net/?retryWrites=true&w=majority")
    .then(conn => global.conn = conn.db("Maps"))
    .catch(err => console.log(err))


async function consultarTodasLocalizacoes() {
    try {
        const locations = await Marker.find();
        return locations;
    } catch (error) {
        throw error;
    }
}
async function consultarLocalizacaoPorID(id) {
    try {
        const location = await Marker.findById(id);
        return location;
    } catch (error) {
        throw error;
    }
}

async function inserirNovaLocalizacao(localizacao) {
    try {
        const novaLocalizacao = new Marker(localizacao);
        await novaLocalizacao.save();
        return novaLocalizacao;
    } catch (error) {
        throw error;
    }
}

async function atualizarLocalizacaoPorID(id, novaLocalizacao) {
    try {
        const location = await Marker.findByIdAndUpdate(id, novaLocalizacao, { new: true });
        return location;
    } catch (error) {
        throw error;
    }
}

async function excluirLocalizacaoPorID(id) {
    try {
        const location = await Marker.findByIdAndRemove(id);
        return location;
    } catch (error) {
        throw error;
    }
}