import headquarters from "../models/Headquarter.js"

class HeadquarterController {

    static createHeadquarter = (req, res) => {
        let headquarter = new headquarters(req.body);
        headquarter.save((err) => {
            if (err) {
                res.status(500).send({message: `${err} - falha ao cadastrar a sede`})
            }
            else {
                res.status(201).send(headquarter.toJSON());
            }
        })
        
    }

    static readHeadquarter = (req, res) => {
        headquarters.find()
        .populate('costumer')
        .exec((err, headquarters) => {
            res.status(200).json(headquarters);
        });
    }

    static readHeadquarterById = (req, res) => {
        const id = req.params.id;
        headquarters.findById(id)
        .populate('costumer')
        .exec((err, headquarters) => {
            if (err) {
                res.status(400).send({message: `${err.message} - ID da sede não encontrado.`});
            }
            else {
                res.status(200).json(headquarters);
            }  
        })
    }

    static updateHeadquarter = (req, res) => {
        const id = req.params.id;
        headquarters.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao atualizar a sede.`})
            }
            else {
                res.status(200).send({message: "Sede atualizada com sucesso."})
            }
        })
    }

    static deleteHeadquarter = (req, res) => {
        const id = req.params.id;
        headquarters.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao deletar a sede.`});
            }
            else {
                res.status(200).send({message: "Sede deletada com sucesso."})
            }
        })
    }
}

export default HeadquarterController;