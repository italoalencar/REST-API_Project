import express from "express";
import BrandController from "../controllers/BrandController.js"

const router = express.Router();

router
    .get("/marcas", BrandController.readBrand)

export default router;