import costumers from "../models/Costumer.js"

class CostumerController {

    static createCostumer = (req, res) => {
        let costumer = new costumers(req.body);
        costumer.save((err) => {
            if (err) {
                res.status(500).send({message: `${err} - falha ao cadastrar o cliente`})
            }
            else {
                res.status(201).send(costumer.toJSON());
            }
        })
        
    }

    static readCostumer = (req, res) => {
        costumers.find()
        .exec((err, costumers) => {
            res.status(200).json(costumers);
        });
    }

    static readCostumerById = (req, res) => {
        const id = req.params.id;
        costumers.findById(id)
        .exec((err, costumers) => {
            if (err) {
                res.status(400).send({message: `${err.message} - ID do cliente não encontrado.`});
            }
            else {
                res.status(200).json(costumers);
            }  
        })
    }

    static updateCostumer = (req, res) => {
        const id = req.params.id;
        costumers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao atualizar o cliente.`})
            }
            else {
                res.status(200).send({message: "Cliente atualizado com sucesso."})
            }
        })
    }

    static deleteCostumer = (req, res) => {
        const id = req.params.id;
        costumers.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao deletar o cliente`});
            }
            else {
                res.status(200).send({message: "Cliente deletado com sucesso."})
            }
        })
    }
}

export default CostumerController;