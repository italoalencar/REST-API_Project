import categories from "../models/Category.js";

class CategoryController {
    static createCategory = (req, res) => {
        let category = new categories(req.body);
        category.save((err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao cadastrar a categoria.`});
            }
            else {
                res.status(201).send(category.toJSON());
            }
        })
    }

    static readCategory = (req, res) => {
        categories.find()
        .exec((err, categories) => {
            res.status(200).json(categories);
        })
    }

    static readCategoryById = (req, res) => {
        const id = req.params.id;
        categories.findById(id)
        .exec((err, categories) => {
            if (err) {
                res.status(400).send({message: `${err} - ID não encontrado.`});
            }
            else {
                res.status(200).json(categories);
            }
        })
    }

    static updateCategory = (req, res) => {
        const id = req.params.id;
        categories.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao atualizar a categoria`});
            }
            else {
                res.status(200).send({message: "Categoria atualizada com sucesso"});
            }
        })
    }

    static deleteCategory = (req, res) => {
        const id = req.params.id;
        categories.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err} - Falha ao deletar a catogria.`})
            }
            else {
                res.status(200).send({message: "Categoria deletada com sucesso."})
            }
        })
    }
}

export default CategoryController;