import brands from "../models/Brand.js"

class BrandController {

    static createBrand = (req, res) => {
        
    }

    static readBrand = (req, res) => {

        brands.find()
        .populate('brand')
        .exec((err, brands) => {
            res.status(200).json(brands);
        })

    }

    static readBrandById = (req, res) => {

    }

    static updateBrand = (req, res) => {
        
    }

    static deleteBrand = (req, res) => {
        
    }
}

export default BrandController;