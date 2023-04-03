import express from "express";
import CategoryController from "../controllers/CategoryController.js";

const router = express.Router();

router
    .get("/categorias", CategoryController.readCategory)
    .get("/categorias/:id", CategoryController.readCategoryById)
    .post("/categorias", CategoryController.createCategory)
    .put("/categorias/:id", CategoryController.updateCategory)
    .delete("/categorias/:id", CategoryController.deleteCategory)

export default router;    