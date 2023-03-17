import brands from "../models/Brand.js"

class BrandController {

    static createBrand = (req, res) => {
        let brand = new brands(req.body);
        brand.save((err) => {
            if (err) {
                res.status(500).send({message: `${err} - falha ao cadastrar a marca`})
            }
            else {
                res.status(201).send(brand.toJSON());
            }
        })
        
    }

    static readBrand = (req, res) => {
        brands.find()
        .exec((err, brands) => {
            res.status(200).json(brands);
        });
    }

    static readBrandById = (req, res) => {
        const id = req.params.id;
        brands.findById(id)
        .exec((err, brands) => {
            if (err) {
                res.status(400).send({message: `${err.message} - ID da marca não encontrada.`});
            }
            else {
                res.status(200).json(brands);
            }
            
        })

    }

    static updateBrand = (req, res) => {
        const id = req.params.id;
        brands.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao atualizar a marca.`})
            }
            else {
                res.status(200).send({message: "Marca atualizada com sucesso."})
            }
        })
    }

    static deleteBrand = (req, res) => {
        const id = req.params.id;
        brands.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao deletar a marca`});
            }
            else {
                res.status(200).send({message: "Marca deletada com sucesso."})
            }
        })
        
    }
}

export default BrandController;