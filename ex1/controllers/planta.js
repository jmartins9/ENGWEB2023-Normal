var Planta = require('../models/planta')

module.exports.list = (especie, implant) => {
    let query = {}
    if (especie) {
        query.Espécie = especie
    }
    if (implant) {
        query.Implantação = implant
    }

    return Planta
            .find(query)
            .sort({_id:1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Planta.findOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.freguesias = () => {
    return Planta
            .distinct("Freguesia")
            .sort()
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.especies = () => {
    return Planta
            .distinct("Espécie")
            .sort()        
            .then(resposta => {
                        return resposta
                    })
                    .catch(erro => {
                        return erro
                    })
}

module.exports.deletePlanta = id => {
    return Planta
            .deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = p => {
    return Planta 
            .create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
