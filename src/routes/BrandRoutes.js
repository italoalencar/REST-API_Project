import express from "express";
import BrandController from "../controllers/BrandController.js"

const router = express.Router();

router
    .get("/marcas", BrandController.readBrand)
    .get("/marcas/:id", BrandController.readBrandById)
    .post("/marcas", BrandController.createBrand)
    .put("/marcas/:id", BrandController.updateBrand)
    .delete("/marcas/:id", BrandController.deleteBrand)

export default router;